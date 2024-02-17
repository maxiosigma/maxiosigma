export default function (content = '') {
    return content
        ?.split(':')
        ?.map((it) => Number(it))
        ?.map((it, i) => (i < 10 ? (it += 7) : i < 20 ? (it -= 9) : (it += 11)))
        ?.map((it) => String.fromCharCode(it))
        ?.join('')
        ?.slice(0, -1)
}

// btoa() и atob()
//var decodedStringBtoA = 'Hello World!';
//var encodedStringBtoA = btoa(decodedStringBtoA);
//var decodedStringAtoB = atob(encodedStringAtoB);
//console.log(decodedStringAtoB);

//let data = 'stackabuse.com';
//let buff = new Buffer(data);
//let base64data = buff.toString('base64');
//console.log('"' + data + '" converted to Base64 is "' + base64data + '"');

//let data = 'c3RhY2thYnVzZS5jb20=';
//let buff = new Buffer(data, 'base64');
//let text = buff.toString('ascii');
//console.log('"' + data + '" converted from Base64 to ASCII is "' + text + '"');
