const path = require('path');

console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')); // создает относительний путь
console.log(path.resolve('/foo/bar', './baz')); // создает абсолютний путь
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); // нормализует путь
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\')); // нормализует путь
console.log(path.parse('/home/user/file.txt')); // расписивает путь
console.log(path.join('/foo', 'bar', '...')); // соединяет путь
console.log(path.sep); // разделяет путь
