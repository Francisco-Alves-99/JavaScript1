nome = "Francisco"
anoNascimento = 1999

dataHoje = new Date()
anoAtual = dataHoje.getFullYear()

idade = anoAtual - anoNascimento

mensagem = "Eu sou o " + nome + " e tenho " + idade + " anos."

alert(mensagem)