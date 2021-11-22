const small   = window.matchMedia('(max-width: 767px)')
const medium  = window.matchMedia('(min-width:767px) and (max-width: 1023px)')
const large   = window.matchMedia('(min-width: 1023px)')

function replace(string, replace, with_this) {
  return string.replace(replace, with_this);
}

function clearClasses (e){
  var sms   = document.querySelectorAll('[small]');
  var meds  = document.querySelectorAll('[medium]');
  var lgs   = document.querySelectorAll('[large]');

  sms.forEach(sm => {
    var allClasses     = sm.getAttribute('all');
    sm.removeAttribute("class");
    if (allClasses != null){
        sm.classList += ' ' + allClasses;
    }
  });

  meds.forEach(md => {
    var allClasses     = md.getAttribute('all');
    md.removeAttribute("class");
    if (allClasses != null){
        md.classList += ' ' + allClasses;
    }
  });

  lgs.forEach(lg => {
    var allClasses     = lg.getAttribute('all');
    lg.removeAttribute("class");
    if (allClasses != null){
        lg.classList += ' ' + allClasses;
    }
  });
}

function swapClasses (e){

  if (small.matches) {
    
    // get all elements with x-class attribute
    var allClasses = document.querySelectorAll('[x-class]');

    // loop through allClasses  
    allClasses.forEach(all => {
      // get x-class attribute as string
      var classString = all.getAttribute('x-class');
      // replace in string
      var classes = replace( classString, 'sm:', '')

      // replace [class] with classes string
      all.setAttribute('class', classes);
    });

  }

  if (medium.matches) {
    
    // get all elements with x-class attribute
    var allClasses = document.querySelectorAll('[x-class]');

    // loop through allClasses  
    allClasses.forEach(all => {
      // get x-class attribute as string
      var classString = all.getAttribute('x-class');
      // replace in string
      var classes = replace( classString, 'md:', '')

      // replace [class] with classes string
      all.setAttribute('class', classes);
    });

  }

  if (large.matches) {
    
    // get all elements with x-class attribute
    var allClasses = document.querySelectorAll('[x-class]');

    // loop through allClasses  
    allClasses.forEach(all => {
      // get x-class attribute as string
      var classString = all.getAttribute('x-class');
      // replace in string
      var classes = replace( classString, 'lg:', '')

      // replace [class] with classes string
      all.setAttribute('class', classes);
    });

  }

}

// onLoad or onResize
function onResizeFunction (e){
  swapClasses();
}

function onLoadFunction(e){
  swapClasses();
}

window.addEventListener("resize", onResizeFunction);
window.addEventListener("load", onLoadFunction);
