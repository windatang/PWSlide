function anim_3() {
  var delayTime = function(step) {
    return 0.7 * step + 's'
  }
  var flashTime = '0.1s'
  var fadeTime = '1s'


  $('.subtitle-mask')
    .transition({ opacity: 0 }, { duration: fadeTime })
  $('.left-num-mask')
    .transition({ opacity: 0 }, { duration: fadeTime, delay: delayTime(1) })
  $('.and-or')
    .transition({ opacity: 1 }, { duration: fadeTime, delay: delayTime(2) })
  $('.right-num-mask')
    .transition({ opacity: 0 }, { duration: fadeTime, delay: delayTime(3) })
  $('.text-mask')
    .transition({ opacity: 0 }, { duration: fadeTime, delay: delayTime(4) })

  $('.num-left, .num-right')
    .transition({ opacity: 0 }, { duration: flashTime, delay: delayTime(5) })
    .transition({ opacity: 1 }, { duration: flashTime })
    .transition({ opacity: 0 }, { duration: flashTime })
    .transition({ opacity: 1 }, { duration: flashTime })
    .transition({ opacity: 0 }, { duration: flashTime })
    .transition({ opacity: 1 }, { duration: flashTime })
    .transition({ opacity: 0 }, { duration: flashTime })
    .transition({ opacity: 1 }, { duration: flashTime })
}

function anim_8() {
  $('.line1-mask').css('transform', 'rotate(-54deg)')
  $('.line2-mask').css('transform', 'rotate(-24deg)')
  $('.line3-mask').css('transform', 'rotate(-22deg)')

  var x = 0
  var s = ['.x-mask', '.y-mask', '.z-mask']
  $('.triggers').on('click touchstart', 'a', function(e) {
    e.preventDefault()

    var $this = $(this)
    if ($this.hasClass('disabled')) {
      return false
    }
    $this.addClass('disabled')

    var i = $this.index()
    var w = [117, 409, 408]

    if (i < 3) {
      $('.line' + (i + 1) + '-mask > i').transition({ width: w[i] }, { onTransitionEnd: cb })
      $(s[i]).transition({ opacity: 1 }, { duration: '0.8s' })
    }
    else {
      w.forEach(function(n, i) {
        $('.line' + (i + 1) + '-mask > i').transition({ width: n }, { onTransitionEnd: cb })
      })
      $(s.join(',')).transition({ opacity: 1 }, { duration: '0.8s' })
    }

  })

  function cb() {
    if (x === 2) {
      $('.red-line').transition({ width: 537 })
    }
    x += 1
  }
}



function anim_8() {
  $('.line1-mask').css('transform', 'rotate(-54deg)')
  $('.line2-mask').css('transform', 'rotate(-24deg)')
  $('.line3-mask').css('transform', 'rotate(-22deg)')

  var x = 0
  var s = ['.x-mask', '.y-mask', '.z-mask']
  $('.triggers').on('click touchstart', 'a', function(e) {
    e.preventDefault()

    var $this = $(this)
    if ($this.hasClass('disabled')) {
      return false
    }
    $this.addClass('disabled')

    var i = $this.index()
    var w = [117, 409, 408]

    if (i < 3) {
      $('.line' + (i + 1) + '-mask > i').transition({ width: w[i] }, { onTransitionEnd: cb })
      $(s[i]).transition({ opacity: 1 }, { duration: '0.8s' })
    }
    else {
      w.forEach(function(n, i) {
        $('.line' + (i + 1) + '-mask > i').transition({ width: n }, { onTransitionEnd: cb })
      })
      $(s.join(',')).transition({ opacity: 1 }, { duration: '0.8s' })
    }

  })

  function cb() {
    if (x === 2) {
      $('.red-line').transition({ width: 537 })
    }
    x += 1
  }
}

