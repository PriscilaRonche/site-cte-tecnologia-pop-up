import { Jimp } from 'jimp';

async function removeBackground() {
  console.log('Lendo imagem public/logo_raw.png...');
  const image = await Jimp.read('public/logo_raw.png');
  
  console.log('Removendo fundo branco...');
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // Pixels próximos ao branco puro (r, g, b > 230)
    if (r > 230 && g > 230 && b > 230) {
      this.bitmap.data[idx + 3] = 0; // Torna o pixel transparente
    }
  });

  console.log('Cortando margens transparentes sobressalentes...');
  image.autocrop();
  
  console.log('Salvando logo transparente em public/logo.png...');
  await image.write('public/logo.png');
  console.log('Processamento concluído com sucesso!');
}

removeBackground().catch(err => {
  console.error('Erro ao processar imagem:', err);
});
