csv=[]; // Collect form values to this array.

function saveFile(csv){
    var fso,oStream;
    fso=new ActiveXObject('Scripting.FileSystemObject');
    oStream=fso.OpenTextFile('absolute_file_path',8,true);
    oStream.WriteLine(csv.join(','));
    oStream.Close();
    return;
}

function readFile(path){
    var fso,iStream,n,csv=[];
    fso=new ActiveXObject('Scripting.FileSystemObject');
    iStream=fso.OpenTextFile(path,1,true);
    for(n=0;!iStream.AtEndOfStream;n++){
        csv[n]=iStream.ReadLine().split(',');
    }
    iStream.Close();
    return csv;
}