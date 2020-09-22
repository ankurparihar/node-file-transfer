# Node.js file transfer application


> Share file with any device wired or wirelessly

This is an ad-hoc solution I came up with in order to *avoid buying overpriced mac thunderbolt to USB adapter* (sadly mac has 4 thunderbolt which I can use only for charging :(, and no other ports)

### Requirement
- sender: must be able to run node.js. Install node and npm for this
- receiver: must be able to connect/browser sender via browser, curl etc.

### Steps

- Clone this repository and go inside the folder
```
	git clone https://github.com/ankurparihar/node-file-transfer
	cd node-file-transfer
```
- Install dependencies
```
	npm install
```
- Connect sender and receiver on local network and find sender's ip address
	- Either use direct connection (hotspot -> wifi) or indirect (wifi <- hotspot -> wifi) or global carrier (-> 3G/4G, -> 3G/4G, its costly)
	- preferred mode is wifi with 5GHz band (provides ~12MBps)
	- To find ip address of hotspot connected devices if you're using android, install [Termux](https://termux.com/) and run command `ip neigh`

- Put your file in repo folder for example data.txt
- change `filename` variable to your file's name in [app.js](./app.js)

__Note__ : If it is inconvenient to move/copy file to repo folder you can also provide full path to `file`

- All setup done! run the server
```
	npm start
```
- Visit sender url from receiver `http://<sender_ip>:<port>`, port is displayed on console after we run the server as in previous step
- If everything goes right, your file will start downloading :)

- To share another file, stop the server (ctrl+c/cmd+c), put file in folder, change `filename` in app.js and run server again