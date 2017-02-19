const model = {
  getNumber: (k,die) => {
    let value = Math.floor((Math.random()*6)+1)
    $(die).text(value)
  }
}

const controller = {
  getDice: () => {
    console.log('WAT');
    $('.dice').append('<div class="die">0</div>')
  },
  rollDice: () => {
    $('.die').each(model.getNumber)
  }
}

const view = {
  onClick: () => {
    $('#roller button.add').on('click', controller.getDice)
    $('#roller button.roll').on('click', controller.rollDice)
  }
}

$(document).ready(view.onClick)
