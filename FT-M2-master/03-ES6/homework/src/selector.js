var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);
  // for (let i = 0 ; i< startEl.children.length,i {
  //   let result = traverseDomAndCollectElements(matchFunc,startEl.children[i]);
  //   resultSet =[...resultSet,...result];
  // }
  // return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction=(element)=> ("#"+element.id===selector); //si da true retorna true si da false retorna false
  } else if (selectorType === "class") {
    matchFunction = (element) => {
      for (const cls of element.classList) {
        if("."+cls===selector) return true;
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = (element) => {
      const[miTag, miClass]=selector.split("."); //me da un array con un ["div","redondo"] el punto se lo come.
      return (matchFunctionMaker(miTag)(element) && matchFunctionMaker(miClass)(element));
    };
  } else if (selectorType === "tag") {
    matchFunction = (element) => {
      if (element.tagName.toLowerCase() === selector) return true;
      return false;
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
