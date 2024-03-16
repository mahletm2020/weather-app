const name = document.getElementById("input")
const cname = document.getElementById("countryname")
const conditionne = document.getElementById("cond")
const timepoint = document.getElementById("time");
const tempr = document.getElementById("teamprature")

async function fetchpd() {
    try {

       //const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(name.value)}/2022-03-05?key=JXGF9LV9TEPZ98LF7G937J87Z`)
        const data = await response.json();
        console.log(data)


        cname.innerText = data.address
        timepoint.innerText = data.days[0].datetime
         conditionne.innerText = data.days[0].conditions
        tempr.innerText = data.days[0].temp

        if (data.days[0].temp < 32) {
            tempr.style.color = "#070F2B"
        }
        else if (data.days[0].temp <= 68) {
            tempr.style.color = "#1B1A55"

        }
        else if (data.days[0].temp >= 98) {
            tempr.style.color = "#535C91"

        }
        else if (data.days[0].temp >= 113) {
            tempr.style.color = "#9290C3"

        }
        else if (data.days[0].temp >= 140) {
            tempr.style.color = "#98ABEE"

        }


    }

    catch (error) {
        console.log(error)
    }
}























