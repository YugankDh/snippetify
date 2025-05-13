import { React, useState, useRef } from 'react'
import './Generator.css'
import AceEditor from 'react-ace'
import { toPng } from 'html-to-image'

//import languages
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-clojure";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-dart";
import "ace-builds/src-noconflict/mode-django";
import "ace-builds/src-noconflict/mode-ejs";
import "ace-builds/src-noconflict/mode-elixir";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-haskell";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-lua";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-perl";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-plain_text";
import "ace-builds/src-noconflict/mode-powershell";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-sass";
import "ace-builds/src-noconflict/mode-scala";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-velocity";
import "ace-builds/src-noconflict/mode-vue";
import "ace-builds/src-noconflict/mode-xml";



//import themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/theme-gruvbox";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-pastel_on_dark";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-eclipse";






const Generator = () => {

    const download = useRef(null)

    const htmlToImageConvert = () => {
        toPng(download.current, { cacheBust: false })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "Code_Snippetify.png";
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const [code, setCode] = useState("// Write your code here...");
    const [Theme, setTheme] = useState("one_dark")
    const [Language, setLanguage] = useState("javascript")
    const [bgColor, setbgColor] = useState("#2084d6")
    // const [theme, setTheme] = useState

    const handleTheme = (e) => {
        setTheme(e.target.value.toLowerCase().replace(' ', '_'))
    }

    const handleLanguage = (e) => {
        setLanguage(e.target.value)
    }

    const handleColorChange = (e) => {
        setbgColor(e.target.value)
    }

    return (
        <div className="frame">
            <div className="option-frame">
                <span>Select Theme</span> <select onChange={handleTheme} className='select-theme' value={Theme}>
                    <option value="monokai">Monokai</option>
                    <option value="github">GitHub</option>
                    <option value="solarized_dark">Solarized Dark</option>
                    <option value="one_dark">One Dark</option>
                    <option value="cobalt">Cobalt</option>
                    <option value="dracula">Dracula</option>
                    <option value="github_dark">GitHub Dark</option>
                    <option value="gruvbox">Gruvbox</option>
                    <option value="nord_dark">Nord Dark</option>
                    <option value="tomorrow_night">Tomorrow Night</option>
                    <option value="tomorrow_night_bright">Tomorrow Night Bright</option>
                    <option value="pastel_on_dark">Pastel on Dark</option>
                    <option value="terminal">Terminal</option>
                    <option value="twilight">Twilight</option>
                    <option value="eclipse">Eclipse</option>

                </select>

                <span>Select Language</span> <select onChange={handleLanguage} value={Language} className="select-language">
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="json">JSON</option>
                    <option value="clojure">Clojure</option>
                    <option value="c_cpp">C/C++</option>
                    <option value="css">CSS</option>
                    <option value="dart">Dart</option>
                    <option value="django">Django</option>
                    <option value="ejs">EJS</option>
                    <option value="elixir">Elixir</option>
                    <option value="golang">Go</option>
                    <option value="haskell">Haskell</option>
                    <option value="html">HTML</option>
                    <option value="java">Java</option>
                    <option value="jsx">JSX</option>
                    <option value="kotlin">Kotlin</option>
                    <option value="lua">Lua</option>
                    <option value="markdown">Markdown</option>
                    <option value="mysql">MySQL</option>
                    <option value="perl">Perl</option>
                    <option value="php">PHP</option>
                    <option value="plain_text">Plain Text</option>
                    <option value="powershell">PowerShell</option>
                    <option value="ruby">Ruby</option>
                    <option value="rust">Rust</option>
                    <option value="sass">Sass</option>
                    <option value="scala">Scala</option>
                    <option value="sql">SQL</option>
                    <option value="swift">Swift</option>
                    <option value="typescript">TypeScript</option>
                    <option value="velocity">Velocity</option>
                    <option value="vue">Vue</option>
                    <option value="xml">XML</option>
                </select>

                <span>Select Color</span><input type="color" id='color' value={bgColor} onChange={handleColorChange} />
                <button onClick={htmlToImageConvert} className="download">Download Image</button>

            </div>
            <div className="editor-frame" ref={download}>
                <div className="bg-color" style={{ backgroundColor: bgColor }}>
                    <AceEditor className='ace'
                        mode={Language}
                        theme={Theme}
                        fontSize={16}
                        width='70%'
                        height='100%'
                        // border-radius='20px'
                        showPrintMargin={false}
                        minLines={10}
                        maxLines={Infinity}
                        value={code}
                        wrapEnabled={true}


                        onChange={(newValue) => setCode(newValue)}
                        editorProps={{ $blockScrolling: true }}

                        setOptions={{
                            showLineNumbers: false,
                            tabSize: 4,
                            showGutter: false,
                            highlightActiveLine: false,

                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            highlightGutterLine: false,
                            hScrollBarAlwaysVisible: true,
                            wrap: 'free',
                            indentedSoftWrap: false,


                        }}
                        onLoad={(editor) => {
                            editor.renderer.setPadding(12); // Set padding inside the editor
                            editor.renderer.setScrollMargin(20, 20, 20, 0); // Set scroll margins
                        }} />



                </div>
            </div>
        </div>
    )
}

export default Generator
