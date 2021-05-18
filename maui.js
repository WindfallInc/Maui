const small   = window.matchMedia('(max-width: 767px)')
const medium  = window.matchMedia('(min-width:767px) and (max-width: 1023px)')
const large   = window.matchMedia('(min-width: 1023px)')

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

  clearClasses();

  if (small.matches) {
    var refs = document.querySelectorAll('[small]');

    refs.forEach(ref => {
      var allClasses     = ref.getAttribute('all');
      var smallClasses  = ref.getAttribute('small');

      ref.removeAttribute("class");

      if (allClasses != null){
          ref.classList += ' ' + allClasses;
      }

      ref.classList += ' ' + smallClasses;
  	});
  }

  if (medium.matches) {
    var refs = document.querySelectorAll('[medium]');

    refs.forEach(ref => {
      var allClasses     = ref.getAttribute('all');
      var mediumClasses  = ref.getAttribute('medium');

      ref.removeAttribute("class");

      if (allClasses != null){
          ref.classList += ' ' + allClasses;
      }

      ref.classList += ' ' + mediumClasses;
  	});
  }

  if (large.matches) {
    var refs = document.querySelectorAll('[large]');

    refs.forEach(ref => {
      var allClasses     = ref.getAttribute('all');
      var largeClasses  = ref.getAttribute('large');

      ref.removeAttribute("class");

      if (allClasses != null){
          ref.classList += ' ' + allClasses;
      }

      ref.classList += ' ' + largeClasses;
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
