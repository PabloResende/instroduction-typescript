function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  }
}
