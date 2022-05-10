# npm-publish-action


For a correct use of the publish library, is important to check:
https://stackoverflow.com/questions/64060616/angular-10-cannot-read-property-bindingstartindex-of-null-when-using-library-w

In particoular add 
"projects.project-name.architect.build.options.preserveSymlinks": true
to angular.json
and
paths: {
   "@angular/*": [
      "./node_modules/@angular/*"
   ],
}

to tsconfig.json


Altro punto importante è che quando viene fatto il push sia specificato l'ultima versione della libreria nel package.json. 
Siccome tutto punta sempre al compilato dist, assicurarsi che venga fatto ng build prima di uploadre su npm
