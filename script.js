var models = [{
        name: 'Bmw 418d',
        image: 'img/bmw.jpg',
        link: 'http://www.webigem.com'
    },
    {
        name: 'Mazda CX-3',
        image: 'img/mazda.jpg',
        link: 'http://www.webigem.com'
    },
    {
        name: 'Volvo S60',
        image: 'img/volvo.jpg',
        link: 'http://www.webigem.com'
    },
    {
        name: 'Skoda Superb',
        image: 'img/skoda.jpg',
        link: 'http://www.webigem.com'
    },
    {
        name: 'Honda Civic',
        image: 'img/honda.jpg',
        link: 'http://www.webigem.com'
    }
];

var index = 0;

var styleCount = models.length;
var interval;
var settings = {
    duration: '2000',
    random: false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function() {
    index--;
    showSlid(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function() {
    index++;
    showSlid(index);
    console.log(index);
});


document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        clearInterval(interval);
    })
});


document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        init(settings);
    })
})




function init(settings) {
    var prev;
    interval = setInterval(function() {
        if (settings.random) {
            // Rastgele Slider
            do {
                index = Math.floor(Math.random() * styleCount);
            }
            while (index == prev)
            prev = index;
        } else {
            // Artan Slider
            if (styleCount == index + 1) {
                index = -1;
            }
            showSlid(index);
            // console.log(index);
            index++;
        }
        console.log(index);
        showSlid(index);
    }, settings.duration)
}




function showSlid(i) {

    index = i;

    if (i < 0) {
        index = styleCount - 1;
    }

    if (i >= styleCount) {
        index = 0;
    }


    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src', models[index].image);

    document.querySelector('.card-link').setAttribute('href', models[index].link);
}