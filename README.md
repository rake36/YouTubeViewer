# Light-Weight YouTube Viewer

Created by following along with 
[Stephen Grider's class on Udemy](https://www.udemy.com/react-redux/).

To download and run:
```
> git clone https://github.com/rake36/YouTubeViewer.git
> cd YouTubeViewer
> npm install
> npm start
```

By default, will run on http://localhost:3000.

Modify webpack.config.js to change the port.

To enable YouTube API, create a config.js file under /src/components:
```
export default function() {
    return {
        API_KEY: 'YOUR YOUTUBE API KEY'
    };
}
```

