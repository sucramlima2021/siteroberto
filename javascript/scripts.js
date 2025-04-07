const carousel1 = new bootstrap.Carousel(document.getElementById('sarCarousel'));
const carousel2 = new bootstrap.Carousel(document.getElementById('srpCarousel'));
const carousel3 = new bootstrap.Carousel(document.getElementById('smCarousel'));
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
			data: [1000, 1160, 1345, 1560, 1809, 2098],
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
				max: 2200,
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

function acumulo_riquesa(){
	
	var s1valor1 = cpn(document.getElementById("s1valor1").value);
	var s1valor2 = cpn(document.getElementById("s1valor2").value);
	var s1valor3 = parseInt(document.getElementById("s1valor3").value)*12;
	const im = (1 + (10/100))**(1/12) - 1;
	const fv_inicial = s1valor2 * (1 + im)**s1valor3;
	const fv_aportes = s1valor1 * [((1 + im)**s1valor3 - 1) / im];
	const total = fv_aportes+fv_inicial;
	const renda = total*im;
	carousel1.next();
	document.getElementById("sarResult").innerHTML = moeda(renda);
	document.getElementById("sarAcumulado").innerHTML = moeda(total);

	
}

function renda_passiva(){
	
	var s2valor1 = cpn(document.getElementById("s2valor1").value);
	const im = (1 + (10/100))**(1/12) - 1;
	const total = s2valor1 / im;
	const dez = total * im / ((1 + im)**120 - 1)
	const vinte = total * im / ((1 + im)**240 - 1)
	const trinta = total * im / ((1 + im)**360 - 1)
	carousel2.next();
	document.getElementById("srpmens").innerHTML = document.getElementById("s2valor1").value;
	document.getElementById("srpResult").innerHTML = moeda(total);
	document.getElementById("srp10").innerHTML = moeda(dez);
	document.getElementById("srp20").innerHTML = moeda(vinte);
	document.getElementById("srp30").innerHTML = moeda(trinta);

	
}
function meta(){
	
	const total = cpn(document.getElementById("s3valor1").value);
	const im = (1 + (10/100))**(1/12) - 1;
	const dez = total * im / ((1 + im)**120 - 1)
	const vinte = total * im / ((1 + im)**240 - 1)
	const trinta = total * im / ((1 + im)**360 - 1)
	carousel3.next();
	document.getElementById("smResult").innerHTML = moeda(total);
	document.getElementById("sm10").innerHTML = moeda(dez);
	document.getElementById("sm20").innerHTML = moeda(vinte);
	document.getElementById("sm30").innerHTML = moeda(trinta);

	
}
function refaz(n){
	switch (n){
		case 1:
			carousel1.prev();
			break;
		case 2:
			carousel2.prev();
			break;
		case 3:
			carousel3.prev();
			break;
		default:
            pass;
	}

}

function cpn(valorEmString) {
	const num = parseFloat(valorEmString.replace("R$","").replace(/\./g,"").replace(",","."));
	return num;
  }
function moeda(numero) {
	const formatter = new Intl.NumberFormat('pt-BR', {
	  style: 'currency',
	  currency: 'BRL'
	});
  
	return formatter.format(numero);
}

function atualiza(tipo) {
	switch (tipo) {
		case 1:
			var sai = parseInt(document.getElementById("sai").value);
			var saif = sai.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
			document.getElementById("s1valor1").value = saif;
			break;
		case 2:
		var sai2 = parseInt(document.getElementById("sai2").value);
		var saif2 = sai2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
		document.getElementById("s1valor2").value = saif2;
			
			break;
		case 3:
		var sai3 = parseInt(document.getElementById("sai3").value);
		document.getElementById("s1valor3").value = sai3;
			
			break;
		case 4:
		  let valor1 =  document.getElementById("s1valor1").value;
		  valor1 = valor1.replace(/\D/g, '');
		  valor1 = new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		  }).format(valor1 / 100);
		  document.getElementById("s1valor1").value = valor1
			break;
		case 5:
		let valor2 =  document.getElementById("s1valor2").value;
		valor2 = valor2.replace(/\D/g, '');
		valor2 = new Intl.NumberFormat('pt-BR', {
		  style: 'currency',
		  currency: 'BRL'
		}).format(valor2 / 100);
		document.getElementById("s1valor2").value = valor2
		  break;
		   
		case 6:
			var sai4 = parseInt(document.getElementById("sai4").value);
			var sai4f = sai4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
			document.getElementById("s2valor1").value = sai4f;
			break;
		case 7:
		let valor3 =  document.getElementById("s2valor1").value;
		valor3 = valor3.replace(/\D/g, '');
		valor3 = new Intl.NumberFormat('pt-BR', {
		  style: 'currency',
		  currency: 'BRL'
		}).format(valor3 / 100);
		document.getElementById("s2valor1").value = valor3
		  break;
		case 8:
		var sai5 = parseInt(document.getElementById("sai5").value);
		var sai5f = sai5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
		document.getElementById("s3valor1").value = sai5f;
		break;
		
		case 9:
		let valor4 =  document.getElementById("s3valor1").value;
		valor4 = valor4.replace(/\D/g, '');
		valor4 = new Intl.NumberFormat('pt-BR', {
		  style: 'currency',
		  currency: 'BRL'
		}).format(valor4 / 100);
		document.getElementById("s3valor1").value = valor4
		  break;

		default:
			pass;
	}


}

