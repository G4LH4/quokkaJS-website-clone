/* eslint-disable react/prop-types */
import React, { useState } from "react";

import atomIMG from "../img/atom.png";
import JbIMG from "../img/JB.png";
import SublimeIMG from "../img/sublime.png";
import vscodeIMG from "../img/vscode.png";

import vscCoverage from "../img/vsc-coverage.gif";
import vscDebugger from "../img/vsc-debugger.gif";
import vscLivePro from "../img/vsc-live-pro.gif";
import vscLive from "../img/vsc-live.gif";
import vscModule from "../img/vsc-module.gif";
import vscProject from "../img/vsc-project.gif";
import vscQuokkaProfile from "../img/vsc-quokka-profile.gif";
import vscVal from "../img/vsc-val.gif";

const Examples = () => {
  const [gifs, setGifs] = useState({
    liveExecution: vscLive,
    liveCoverage: vscCoverage,
    timeMachine: vscDebugger,
    valueExplorer: vscVal,
    liveComments: vscLivePro,
    ProjectFilesImport: vscProject,
    cpuProfiler: vscQuokkaProfile,
    quickPackageInstall: vscModule,
  });

  const IMGS = ({ image, id }) => {
    return (
      <img
        src={image}
        className={"ml-10  opacity-40 cursor-pointer w-28"}
        onClick={(e) => {
          handleClick(e);
        }}
        id={id}
      />
    );
  };

  const handleClick = (e) => {
    // const [isClicked, setIsClicked] = useState(false);

    // const setOpacity = isClicked ? "opacity-100" : "opacity-40";

    const options = {
      vscode: () => {
        setGifs({
          liveExecution: vscLive,
          liveCoverage: vscCoverage,
          timeMachine: vscDebugger,
          valueExplorer: vscVal,
          liveComments: vscLivePro,
          ProjectFilesImport: vscProject,
          cpuProfiler: vscQuokkaProfile,
          quickPackageInstall: vscModule,
        });
      },
      jb: () => {
        setGifs({
          liveExecution: vscCoverage,
          liveCoverage: vscCoverage,
          timeMachine: vscDebugger,
          valueExplorer: vscVal,
          liveComments: vscLivePro,
          ProjectFilesImport: vscProject,
          cpuProfiler: vscQuokkaProfile,
          quickPackageInstall: vscModule,
        });
      },
      atom: () => {
        setGifs({
          liveExecution: vscProject,
          liveCoverage: vscCoverage,
          timeMachine: vscDebugger,
          valueExplorer: vscVal,
          liveComments: vscLivePro,
          ProjectFilesImport: vscProject,
          cpuProfiler: vscQuokkaProfile,
          quickPackageInstall: vscModule,
        });
      },

      sublime: () => {
        setGifs({
          liveExecution: vscLivePro,
          liveCoverage: vscCoverage,
          timeMachine: vscDebugger,
          valueExplorer: vscVal,
          liveComments: vscLivePro,
          ProjectFilesImport: vscProject,
          cpuProfiler: vscQuokkaProfile,
          quickPackageInstall: vscModule,
        });
      },
    };

    return options[e.target.id]();
  };

  const ExamplesSections = ({ title, description, gif }) => {
    return (
      <div>
        <div className="mx-auto mt-10 ml-10 mr-10 w-6/6 max-w-prose">
          <h1 className="mb-10 text-3xl ">{title}</h1>
          <img src={gif} className="rounded-md" />
          <p className="mt-10 text-left">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div id="examples" className={"flex bg-examples mx-auto box-"}>
        <div id="container" className="block mx-auto">
          <div id="images" className={"flex mt-28 mb-28"}>
            <IMGS image={vscodeIMG} id="vscode" />
            <IMGS image={JbIMG} id="jb" />
            <IMGS image={atomIMG} id="atom" />
            <IMGS image={SublimeIMG} id="sublime" />
          </div>
        </div>
      </div>

      <div className={"flex flex-wrap bg-examples "}>
        <div id="container" className="w-8/12 m-10 mx-auto ">
          <section className="flex flex-row">
            <ExamplesSections
              title={"Live Execution and Results"}
              gif={gifs.liveExecution}
              description={
                "Code runs immediately as you type, on unsaved changes; no need to do anything manually or switch context. Error messages are displayed right next to the code that caused them. Console logs and identifier expression values are displayed inline as well."
              }
            />
            <ExamplesSections
              title={"Live Coverage"}
              gif={gifs.liveCoverage}
              description={
                "Indicators in the gutter of your code editor are constantly updated in realtime to display code coverage so you can quickly see which lines of code are the source of an error, which are fully covered, only partially covered or not covered at all."
              }
            />
          </section>

          <section className="flex flex-row">
            <ExamplesSections
              title={"Time Machine"}
              gif={gifs.timeMachine}
              description={
                "Move forward and backwards through your code to understand how your code executes. Time Machine allows you to auto-play or jump to a specific line of code, view runtime values, edit-and-continue and step into, over and out of your code."
              }
            />
            <ExamplesSections
              title={"Live Coverage"}
              gif={gifs.valueExplorer}
              description={
                "Value Explorer allows non-primitive runtime values to be viewed and explored in an easy-to-navigate real-time treeview. This feature is great for exploring larger objects and makes debugging easier and faster. Opened paths / values can be copied directly to the clipboard."
              }
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Examples;
