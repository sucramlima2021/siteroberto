
var aText = new Array(
	"“Minha proposta é transformar a sua vida financeira, para que você viva o presente, invista para o futuro e proteja suas conquistas.”"
	);
	var iSpeed = 30; // time delay of print out
	var iIndex = 0; // start printing array at this posision
	var iArrLength = aText[0].length; // the length of the text array
	var iScrollAt = 20; // start scrolling up at this many lines
	 
	var iTextPos = 0; // initialise text position
	var sContents = ''; // initialise contents variable
	var iRow; // initialise current row
	function typewriter(){
				 
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     destination.style.innerHTML = "";
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    

let tip = document.getElementById("canvasId").getContext("2d");
let chartObj = new Chart(tip, {
	type: "line",
	data: {
		labels: ["0", "Ano 1", "Ano 2", "Ano 3", "Ano 4", "Ano 5"],
		datasets: [{
			label: "Cliente",
			data: [1000, 1180, 1392, 1642, 1938, 2287],
			backgroundColor: ['coral'],
			borderColor: ["black"],
			borderWidth: 1,
			hoverBackgroundColor: ['tomato', 'cyan', 'lightpink', 'limegreen', 'deepskyblue', 'darkred'],
			hoverBorderColor: 'black'},
            {
                label: "Poupança",
                data: [1000, 1070, 1144, 1225, 1310, 1402],
                backgroundColor: ['aqua'],
                borderColor: ["black"],
                borderWidth: 1,
                hoverBackgroundColor: ['tomato', 'cyan', 'lightpink', 'limegreen', 'deepskyblue', 'darkred'],
                hoverBorderColor: 'black'}],
	},
	options: {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: 'Rentabilidade Acumulada em R$',
			},
			canvasId: {
				enabled: true,
				backgroundColor: 'rgba(255, 255, 0, 0.8)',
				borderColor: 'black',
				borderWidth: 1,
				displayColors: false,
				callbacks: {
					label: function (context) {
						return 'Value: ' + context.parsed.y;
					},
					title: function (context) {
						return 'Subject: ' + context[0].label;
					},
				},
			},
		},
	    animations: {
			tension: {
				duration: 1000,
				easing: 'easeOutBounce',
				from: 0,
				to: 1,
				loop: true,
			},
			y: {
				easing: 'easeInOutElastic',
			},
		},
		scales: {
			y: {
				min: 1000,
				max: 2500,
			}
		}
	}
});

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}



document.addEventListener("DOMContentLoaded", function() {
    const valorProtecao = document.getElementById("valor-protecao");
    const familiasIndenizadas = document.getElementById("familias-indenizadas");
	

    animateValue(valorProtecao, 0, 40000000, 2000); // Anima de 0 a 40.000.000 em 2 segundos
    animateValue(familiasIndenizadas, 0, 70, 2000);
	





        const section2 = document.getElementById('resultados');
		const section1 = document.getElementById('proposta');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
					if (entry.target.id == "proposta"){
						console.log("proposta");
						
					}
					else{
                    animateValue(valorProtecao, 0, 40000000, 1000); // Anima de 0 a 40.000.000 em 2 segundos
    				animateValue(familiasIndenizadas, 0, 70, 1000);
					chartObj.reset(); // Reseta o gráfico para o estado inicial
					chartObj.options.animation.duration = 1000; // Restaura a duração da animação
					chartObj.update(); // Atualiza o gráfico com animação
					console.log(entry.target.id);}
                } 
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        observer.observe(section1);
		observer.observe(section2);

	});