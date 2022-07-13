var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["CGI", "3D Printing", "Coding"],
            datasets: [{
                backgroundColor: [
                    "rgba(0,184,255, .7)",
                    "rgba(0,184,255, .5)",
                    "rgba(0,184,255, .2)"                    
                ],
                data: [44, 54, 4]
            }]
        },
        options: {
            responsive: true
        }
    });