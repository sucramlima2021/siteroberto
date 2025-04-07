const carousel = new bootstrap.Carousel(document.getElementById('quizCarousel'));
const nextButtons = document.querySelectorAll('.next-btn');
const resultText = document.getElementById('resultText');
const resultPontos = document.getElementById('resultPontos');

let totalScore = 0;

nextButtons.forEach(button => {
	button.addEventListener('click', () => {
	  const activeItem = document.querySelector('.carousel-item.active');
	  const selectedOption = activeItem.querySelector('input[type="radio"]:checked');


	  if (activeItem.classList.contains('getContato')) {
		const nome = document.getElementById('quiznome').value.trim();
		const telefone = document.getElementById('quiztel').value.trim();
		const email = document.getElementById('quizemail').value.trim();
		if (nome === '' || telefone === '' || email === '') {
		  alert('Por favor, preencha todos os campos.');
		}
		else {
		  enviaForm();
		  
		}
	  }
	  else {
		if (selectedOption) {
		  totalScore += parseInt(selectedOption.value);
		  carousel.next();
		} else {
		  alert('Por favor, selecione uma opção antes de continuar.');
		}
	  }
	  // Se for a última pergunta, mostrar o resultado
	  if (activeItem.nextElementSibling.classList.contains('result')) {
		let resultMessage = '';
		if (totalScore >= 70) {
		  resultMessage = `<span class="fs-5 fw-bold">Potencial Investidor ou Investidor</span><br><br>
									  <p class="text-start">Parabéns, você é uma das poucas pessoas que alcança essa pontuação!<br>
									  Você tem uma boa organização financeira, já deve ter uma reserva de emergência, além de conseguir investir pensando no seu futuro. Também compreende que o ato de se proteger anda em conjunto o de investir.<br>
									  <span class="fw-bold">Um bom profissional pode lhe orientar como aumentar o seu retorno, diminuir os seus riscos e proteger o seu patrimônio com produtos efetivos.</span></p>`;
		} else if (totalScore >= 45) {
		  resultMessage = `<span class="fs-5 fw-bold">Potencial Poupador ou Poupador</span><br><br>
									  <p class="text-start">Você tem uma vida financeira equilibrada. Mesmo que esteja tudo em dia, o ideal não é viver Receita = Despesa. Você precisa quebrar esse ciclo e começar a poupar.<br>
									  Você tem uma “torneira” aberta que está lhe apertando. Veja se é possível antecipar alguma dívida com desconto, se alguma compra parcelada já está se encerrando e evite despesas desnecessárias.<br<
									  Você não precisa deixar de consumir ou sair, mas sim, fazer de forma mais consciente.<br>
									  Essas pequenas atitudes vão fazer toda a diferença para você começar a poupar algum valor e avançar para o próximo estágio: guarda dinheiro para imprevistos e posteriormente para investir.<br>
									<span class="fw-bold">Um bom profissional pode lhe orientar como aumentar o seu retorno, diminuir os seus riscos e proteger o seu patrimônio com produtos efetivos.</span></p>`;
		} else {
		  resultMessage = `<span class="fs-5 fw-bold">Endividado ou Apertado</span><br><br>
					  <p class="text-start">Sua situação é delicada, você pode estar inadimplente ou muito próximo disso. <br>
					  Você precisa agir e isso não é vergonha.<br>
					  Ficar parado faz você pagar juros e isso é terrível.<br>
					  Comece fazendo uma lista de contas atrasadas e fornecedores atrasados. <br>
					  Companhia de energia, água e gás são empresas que costumam parcelar dívidas atrasadas para lhe ajudar no curto prazo.<br>
					  Bancos e financeiras: é importante procurá-los e negociar um novo prazo e uma parcela que caiba no seu bolso.<br>
					  O seu nome precisa ficar limpo.<br>
					  É bom para você e é bom para o credor mostrar a iniciativa que tem o interesse em resolver o problema. <br>
					  Podem ocorrer alguns sacrifícios, mas o seu “eu” futuro vai agradecer.<br>
					<span class="fw-bold">Um bom profissional pode lhe orientar como aumentar o seu retorno, diminuir os seus riscos e proteger o seu patrimônio com produtos efetivos.</span></p>`;
		}
		resultPontos.innerHTML = `Sua pontuação é <span class="fs-5 fw-bold">${totalScore}</span>.`;
		resultText.innerHTML = resultMessage;
	  }
	});
  });

const carousel1 = new bootstrap.Carousel(document.getElementById('sarCarousel'));
const carousel2 = new bootstrap.Carousel(document.getElementById('srpCarousel'));
const carousel3 = new bootstrap.Carousel(document.getElementById('smCarousel'));
const telefoneInput = document.getElementById('quiztel');
function enviaForm() {
	console.log("foi");
	const nome = document.getElementById('quiznome').value;
	const tel = document.getElementById('quiztel').value;
	const email = document.getElementById('quizemail').value;
  
	fetch('/envia.php', { // Alterado para o script PHP
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify({ nome: nome, tel: tel, email: email })
	})
	.then(response => response.json())
	.then(data => {
	  if (data.success) {
		alert(data.message);
		document.getElementById('meuFormulario').reset();
		carousel.next();
	  } else {
		alert(data.message);
	  }
	})
	.catch(error => {
	  console.error('Erro na requisição:', error);
	  alert('Ocorreu um erro ao enviar o e-mail. Confirme os dados');
	});
  };



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

function validarEmail(email) {
	// Expressão regular para validar um formato de email geral
	const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
	// Testar se o email corresponde ao padrão
	return regexEmail.test(email);
  }

  function validarTelefoneBrasil(telefone) {
	// Formato esperado: (XX) XXXXX-XXXX ou (XX) XXXXXXXXX
	const regexTelefoneBR = /^\(\d{2}\) \d{4,5}-\d{4}$/;
	return regexTelefoneBR.test(telefone);
  }

  function mascaraTelefone(event) {
	if (event.inputType != 'deleteContentBackward') {
	var input = telefoneInput.value;
	var valor = input.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
	var tamanho = valor.length;
	
	if (tamanho == 1){
	input = "(" + valor;
	}
	if (tamanho == 2) {
	  input ="(" + valor + ") ";
	}
	if (tamanho == 7) {
	  input = "(" + valor.substring(0, 2) + ") " + valor.substring(2, 7) + "-";
	}
	if (tamanho > 11) {
        input = input.slice(0, 15);
      } 
	telefoneInput.value = input;
  }}