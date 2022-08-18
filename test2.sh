ENDPOINT=http://localhost:3000/api/articles;
CONTENT_TYPE="Content-Type: application/json"

../../Programas/Installed/Git/mingw64/bin/curl.exe --silent $ENDPOINT | ../../downloads/jq-win64.exe

echo "----- POST $ENDPOINT -----"

ID=$(../../Programas/Installed/Git/mingw64/bin/curl.exe --silent --request POST $ENDPOINT --header "$CONTENT_TYPE" --data "{\"article\":{\"author\":\"Jane\",\"title\":\"A new post\",\"body\":\"Exclusive data!\"}}" | ../../downloads/jq-win64.exe --raw-output ".id")

../../Programas/Installed/Git/mingw64/bin/curl.exe --silent $ENDPOINT | ../../downloads/jq-win64.exe
