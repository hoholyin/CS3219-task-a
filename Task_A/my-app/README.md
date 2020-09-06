# CS3219 Task A

To build and run the docker image, execute the following script:

```
bash init.sh
```

These are the following commands that will be executed:
```
docker build -t my-app .
docker run --rm -p 80:80 my-app
```

To test, open `http://localhost:80` after running the script above and inspect the GET request from the network tab as it is being sent.
