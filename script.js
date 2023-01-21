const holder = document.querySelectorAll('.holder_container')
const holderCard = document.querySelectorAll('.holder_container_card')
const holderCardCircle = document.querySelectorAll('.holder_container_card_weight-circle')


const listOfCats = [{
        hoverUnselectedFlag: false,
        hoverSelectedFlag: false,
        unselectedColorFlag: true,
        selectedColorFlag: false,
        disabled: true,
        disabledText: 'Печалька, с фуа-гра закончился.',
    }, {
        hoverUnselectedFlag: false,
        hoverSelectedFlag: false,
        unselectedColorFlag: true,
        selectedColorFlag: false,
        disabled: false,
        disabledText: 'Печалька, с рыбой закончился.',
    },
    {
        hoverUnselectedFlag: false,
        hoverSelectedFlag: false,
        unselectedColorFlag: true,
        selectedColorFlag: false,
        disabled: false,
        disabledText: 'Печалька, с курой закончился.',
    }
]

const disablePicStyle = {
    background: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: '0.65',
    'z-index': '1',
    color: '#FFFF66',
}

for (let i = 0; i < listOfCats.length; i++) {
    if (listOfCats[i].disabled === true) {
        let changedP = holder[i].querySelector('p.holder_container_p_link')
        changedP.innerHTML = listOfCats[i].disabledText
        changedP.style.color = disablePicStyle.color
        console.log(changedP.innerHTML);
        holderCard[i].style.border = 'solid #979797'
        holderCardCircle[i].style['background-color'] = '#979797'
        let disablePic = document.createElement('div')
        disablePic.style.background = disablePicStyle.background
        disablePic.style.width = disablePicStyle.width
        disablePic.style.height = disablePicStyle.height
        disablePic.style.position = disablePicStyle.position
        disablePic.style.opacity = disablePicStyle.opacity
        disablePic.style['z-index'] = disablePicStyle['z-index']
        holderCard[i].appendChild(disablePic)
    }
}

document.addEventListener('mouseover', (e) => {
    for (let i = 0; i <= holderCard.length; i++) {
        if (e.target === holderCard[i]) {

            if (!listOfCats[i].disabled) {
                if (listOfCats[i].hoverSelectedFlag === true) {
                    changeSelectedHoverCardColor(e)
                } else if (listOfCats[i].unselectedColorFlag === true) {
                    changeUnselectedHoverCardColor(e)
                }
            }
        }
    }

})
document.addEventListener('mouseout', (e) => {

    for (let i = 0; i <= holderCard.length; i++) {
        if (e.target === holderCard[i]) {
            if (!listOfCats[i].disabled) {
                if (listOfCats[i].hoverUnselectedFlag === true) {
                    reverseUnselectedCardColor(e)
                } else if (listOfCats[i].hoverSelectedFlag === true) {
                    changeSelectedHoverCardColor(e)
                } else if (listOfCats[i].hoverSelectedFlag === false && listOfCats[i].selectedColorFlag === true) {
                    selectCardColor(e)
                }
            }
        }
    }

})
document.addEventListener('click', (e) => {
    for (let i = 0; i <= holderCard.length; i++) {
        if (e.target === holderCard[i]) {
            if (!listOfCats[i].disabled) {
                if (listOfCats[i].hoverUnselectedFlag === true || listOfCats[i].unselectedColorFlag === true) {
                    selectCardColor(e)
                } else if (listOfCats[i].hoverSelectedFlag === true || listOfCats[i].selectedColorFlag === true) {
                    reverseSelectedCardColor(e)
                }
            }
        }
    }

})

function changeUnselectedHoverCardColor(e) {
    for (let i = 0; i <= holderCard.length; i++) {
        if (e.target === holderCard[i]) {
            e.target.style.border = 'solid #2EA8E6'
            for (let j = 0; j <= holderCardCircle.length; j++) {
                if (e.target.childNodes[5] === holderCardCircle[j]) {
                    e.target.childNodes[5].style['background-color'] = '#2EA8E6'
                }
            }

            listOfCats[i].hoverSelectedFlag = false;
            listOfCats[i].selectedColorFlag = false;
            listOfCats[i].unselectedColorFlag = false;
            listOfCats[i].hoverUnselectedFlag = true;
        }
    }
}

function reverseUnselectedCardColor(e) {
    for (let i = 0; i < holderCard.length; i++) {
        if (e.target === holderCard[i]) {
            e.target.style.border = 'solid #1698D9'
            for (let j = 0; j <= holderCardCircle.length; j++) {
                if (e.target.childNodes[5] === holderCardCircle[j]) {
                    e.target.childNodes[5].style['background-color'] = '#1698D9'
                }
            }
            listOfCats[i].hoverSelectedFlag = false;
            listOfCats[i].selectedColorFlag = false;
            listOfCats[i].unselectedColorFlag = true;
            listOfCats[i].hoverUnselectedFlag = false;
        }
    }
}

function selectCardColor(e) {
    for (let i = 0; i < holderCard.length; i++) {
        if (e.target === holderCard[i]) {
            e.target.style.border = 'solid #D91667'
            for (let j = 0; j <= holderCardCircle.length; j++) {
                if (e.target.childNodes[5] === holderCardCircle[j]) {
                    e.target.childNodes[5].style['background-color'] = '#D91667'
                }
            }
            listOfCats[i].hoverUnselectedFlag = false;
            listOfCats[i].unselectedColorFlag = false;
            listOfCats[i].hoverSelectedFlag = true;
            listOfCats[i].selectedColorFlag = false;
        }
    }

}

function changeSelectedHoverCardColor(e) {
    for (let i = 0; i < holderCard.length; i++) {
        if (e.target === holderCard[i]) {
            e.target.style.border = 'solid #E52E7A'
            for (let j = 0; j < holderCardCircle.length; j++) {
                if (e.target.childNodes[5] === holderCardCircle[j]) {
                    e.target.childNodes[5].style['background-color'] = '#E52E7A'
                }
            }
            listOfCats[i].hoverSelectedFlag = false;
            listOfCats[i].unselectedColorFlag = false;
            listOfCats[i].hoverUnselectedFlag = false;
            listOfCats[i].selectedColorFlag = true;
        }
    }


}

function reverseSelectedCardColor(e) {
    for (let i = 0; i < holderCard.length; i++) {
        if (e.target === holderCard[i]) {
            e.target.style.border = 'solid #1698D9'
            for (let j = 0; j <= holderCardCircle.length; j++) {
                if (e.target.childNodes[5] === holderCardCircle[j]) {
                    e.target.childNodes[5].style['background-color'] = '#1698D9'
                }
            }
            listOfCats[i].hoverUnselectedFlag = false;
            listOfCats[i].selectedColorFlag = false;
            listOfCats[i].hoverSelectedFlag = false;
            listOfCats[i].unselectedColorFlag = true;
        }
    }
}