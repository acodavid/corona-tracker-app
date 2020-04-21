const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const auto = true;
const intervatTime = 5000;
let slideInterval;

const coronaGet = new corona;

coronaGet.get('https://api.covid19api.com/summary')
    .then(data => {

        //Global
        document.querySelector('.span-cases-global').textContent = data.Global.TotalConfirmed;

        document.querySelector('.span-deaths-global').textContent = data.Global.TotalDeaths;

        document.querySelector('.span-recovered-global').textContent = data.Global.TotalRecovered;

        const PercentageDeath = ((data.Global.TotalDeaths / data.Global.TotalConfirmed) * 100).toFixed(2);

        document.querySelector('#percentage-death-global').textContent = `${PercentageDeath}%`;

        const PercentageRecovered = ((data.Global.TotalRecovered / data.Global.TotalConfirmed) * 100).toFixed(2);

        document.querySelector('#percentage-recovered-global').textContent = `${PercentageRecovered}%`;

        data.Countries.forEach(country => {

            //bih
            if (country.CountryCode === 'BA') {
                // console.log(country);

                document.querySelector('#bih-cases').textContent = country.TotalConfirmed;

                document.querySelector('#bih-deaths').textContent = country.TotalDeaths;

                document.querySelector('#bih-recovered').textContent = country.TotalRecovered;

                const PercentageDeathbih = ((country.TotalDeaths / country.TotalConfirmed) * 100).toFixed(2);

                document.querySelector('#percentage-death-bih').textContent = `${PercentageDeathbih}%`;

                const PercentageRecoveredbih = ((country.TotalRecovered / country.TotalConfirmed) * 100).toFixed(2);

                document.querySelector('#percentage-recovered-bih').textContent = `${PercentageRecoveredbih}%`;

            }
            //serbia
            else if (country.CountryCode === 'RS') {
                //console.log(country);

                document.querySelector('#serbia-cases').textContent = country.TotalConfirmed;

                document.querySelector('#serbia-deaths').textContent = country.TotalDeaths;

                document.querySelector('#serbia-recovered').textContent = country.TotalRecovered;

                const PercentageDeathSerbia = ((country.TotalDeaths / country.TotalConfirmed) * 100).toFixed(2);

                document.querySelector('#percentage-death-serbia').textContent = `${PercentageDeathSerbia}%`;

                const PercentageRecoveredSerbia = ((country.TotalRecovered / country.TotalConfirmed) * 100).toFixed(2);

                document.querySelector('#percentage-recovered-serbia').textContent = `${PercentageRecoveredSerbia}%`;
            }
            //croatia
            else if (country.CountryCode === 'HR') {
                //console.log(country);

                document.querySelector('#croatia-cases').textContent = country.TotalConfirmed;

                document.querySelector('#croatia-deaths').textContent = country.TotalDeaths;

                document.querySelector('#croatia-recovered').textContent = country.TotalRecovered;

                const PercentageDeathcroatia = ((country.TotalDeaths / country.TotalConfirmed) * 100).toFixed(2);

                document.querySelector('#percentage-death-croatia').textContent = `${PercentageDeathcroatia}%`;

                const PercentageRecoveredcroatia = ((country.TotalRecovered / country.TotalConfirmed) * 100).toFixed(2);

                document.querySelector('#percentage-recovered-croatia').textContent = `${PercentageRecoveredcroatia}%`;
            }
            //montenegro
            else if (country.CountryCode === 'ME') {
                // console.log(country);

                document.querySelector('#montenegro-cases').textContent = country.TotalConfirmed;

                document.querySelector('#montenegro-deaths').textContent = country.TotalDeaths;

                document.querySelector('#montenegro-recovered').textContent = country.TotalRecovered;

                const PercentageDeathmontenegro = ((country.TotalDeaths / country.TotalConfirmed) * 100).toFixed(2);

                document.querySelector('#percentage-death-montenegro').textContent = `${PercentageDeathmontenegro}%`;

                const PercentageRecoveredmontenegro = ((country.TotalRecovered / country.TotalConfirmed) * 100).toFixed(2);

                document.querySelector('#percentage-recovered-montenegro').textContent = `${PercentageRecoveredmontenegro}%`;
            }
            //macedonia
            else if (country.CountryCode === 'MK') {
                //console.log(country);

                document.querySelector('#mac-cases').textContent = country.TotalConfirmed;

                document.querySelector('#mac-deaths').textContent = country.TotalDeaths;

                document.querySelector('#mac-recovered').textContent = country.TotalRecovered;

                const PercentageDeathmac = ((country.TotalDeaths / country.TotalConfirmed) * 100).toFixed(2);

                document.querySelector('#percentage-death-mac').textContent = `${PercentageDeathmac}%`;

                const PercentageRecoveredmac = ((country.TotalRecovered / country.TotalConfirmed) * 100).toFixed(2);

                document.querySelector('#percentage-recovered-mac').textContent = `${PercentageRecoveredmac}%`;
            }
            //slovenia
            else if (country.CountryCode === 'SI') {
                //sconsole.log(country);


                document.querySelector('#slo-cases').textContent = country.TotalConfirmed;

                document.querySelector('#slo-deaths').textContent = country.TotalDeaths;

                document.querySelector('#slo-recovered').textContent = country.TotalRecovered;

                const PercentageDeathslo = ((country.TotalDeaths / country.TotalConfirmed) * 100).toFixed(2);

                document.querySelector('#percentage-death-slo').textContent = `${PercentageDeathslo}%`;

                const PercentageRecoveredslo = ((country.TotalRecovered / country.TotalConfirmed) * 100).toFixed(2);

                document.querySelector('#percentage-recovered-slo').textContent = `${PercentageRecoveredslo}%`;
            }
        })

    })
    .catch(err => console.log(err));

const nextSlide = () => {
    //get current class
    const current = document.querySelector('.current');

    //remove current class
    current.classList.remove('current');

    //check for next slide
    if (current.nextElementSibling) {
        //add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        //add current to start if you are on end
        slides[0].classList.add('current');
    }

    setTimeout(() => current.classList.remove('current'))
}

const prevSlide = () => {
    //get current class
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');

    //check for prev slide
    if (current.previousElementSibling) {
        //add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //add current to end
        slides[slides.length - 1].classList.add('current');
    }

    setTimeout(() => current.classList.remove('current'))
}

//Button events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervatTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervatTime);
    }
});

//Auto slide
if (auto) {
    //run next slide at interval time
    slideInterval = setInterval(nextSlide, intervatTime)
}