const fs = require('fs');

// Удаляем ссилку
fs.unlink('./temp/path.js', err => {
  if (err) {
    console.log(err);
    return;
  }

  // Удаляем пустую папку
  fs.rmdir('temp', err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Delete dane');
  });
});
