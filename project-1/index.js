// ReactDOM.render(<p>Hello welcome to my site</p>, document.getElementById("root"))
const staticPage = (
   <div>
    <header id="HEADER">
        <div class="header-left" >
            <img class="w-2" src="react-logo.png" alt="ract-logo"  width="40px" object-fit="cover" object-position="center"/>
            <h2 class="header-h2">ReactFacts</h2>
        </div>
        <p class="header-left">React Course-project1</p>

    </header>
    <main id="MAIN" >
        <h1>Fun facts about React</h1>
        <div>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k star on Githup</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise app, including mobile apps</li>
                
            </ul>
        </div>
    </main>
   </div>
)

ReactDOM.render(staticPage, document.getElementById("root"))