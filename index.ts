class SistemaAcademico {
  vagasRestantes = 1;

  verificarVaga(curso: string): boolean {
    return this.vagasRestantes > 0;
  }

  registrarAluno(nome: string, curso: string): string {
    this.vagasRestantes--;
    return 'RA' + (1000 + (1 - this.vagasRestantes));
  }
}

class Financeiro {
  boletos: string[] = [];

  gerarBoleto(nome: string): string {
    const boleto = 'BOL-' + nome;
    this.boletos.push(boleto);
    return boleto;
  }
}

class Biblioteca {
  cadastros: string[] = [];

  criarCadastro(ra: string): void {
    this.cadastros.push(ra);
  }
}

class Email {
  enviados: string[] = [];

  enviarBoasVindas(nome: string, ra: string): void {
    this.enviados.push(`Bem-vindo, ${nome} (${ra})`);
  }
}

class MatriculaFacade {
  private academico = new SistemaAcademico();
  private financeiro = new Financeiro();
  private biblioteca = new Biblioteca();
  private email = new Email();

  matricular(nome: string, curso: string): string {
    if (!this.academico.verificarVaga(curso)) {
      throw new Error('Sem vaga em ' + curso);
    }
    const ra = this.academico.registrarAluno(nome, curso);
    this.financeiro.gerarBoleto(nome);
    this.biblioteca.criarCadastro(ra);
    this.email.enviarBoasVindas(nome, ra);
    return ra;
  }

  relatorio() {
    return {
      vagas: this.academico.vagasRestantes,
      boletos: this.financeiro.boletos,
      biblioteca: this.biblioteca.cadastros,
      emails: this.email.enviados,
    };
  }
}

const matricula = new MatriculaFacade();

matricula.matricular('Ana', 'TADS');

try {
  matricula.matricular('Bruno', 'TADS');
} catch (e) {
  console.log('erro:', (e as Error).message);
}

console.log(matricula.relatorio());
