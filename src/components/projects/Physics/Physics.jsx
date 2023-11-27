import { useRef, useEffect, useState } from "react";
import {
  Engine,
  Render,
  Mouse,
  Bodies,
  Runner,
  Composite,
  MouseConstraint,
  Body,
  Events,
} from "matter-js";
import Icon from "../../Icons/Icon";

const buttonStyle =
  "w-fit border-b border-r uppercase text-slate-800 text-sm font-normal mr-1 active:brightness-95 active:scale-95 border-slate-400 bg-slate-300 px-6 py-2 transition-all duration-75 hover:brightness-105 disabled:brightness-80 disabled:scale-100";

const Physics = () => {
  const scene = useRef(null);
  const [currentMovable, setCurrentMovable] = useState();

  // Init: create ENGINE, RENDER, RUNNER, COMPOSITE

  // In a React functional component we need to deal with its stateless aspect while Matter.js is a statefull engine.
  // We don't want to exploit the React nature to update the DOM on each update.
  // For that reason, useRef instead useState is used to add statefulness to the component.

  // An engine is a controller that manages updating the simulation of the world.

  // Create engine and store it in a ref.

  const engine = useRef(Engine.create());
  let mouse;

  // Create initial objects

  const boxA = Bodies.rectangle(400, 200, 80, 80, {
    render: {
      fillStyle: "#64748b",
    },
  });
  const boxB = Bodies.rectangle(450, 50, 80, 80, {
    render: {
      fillStyle: "#64748b",
    },
  });
  const groundA = Bodies.rectangle(200, 200, 100, 10, {
    isStatic: true,
    render: {
      fillStyle: "#334155",
    },
  });
  const groundB = Bodies.rectangle(400, 400, 800, 40, {
    isStatic: true,
    render: {
      fillStyle: "#334155",
    },
  });
  const wallLeft = Bodies.rectangle(1, 10, 40, 800, {
    isStatic: true,
    render: {
      fillStyle: "#334155",
    },
  });
  const wallRight = Bodies.rectangle(800, 10, 40, 800, {
    isStatic: true,
    render: {
      fillStyle: "#334155",
    },
  });

  useEffect(() => {
    const cw = 800;
    const ch = 400;
    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "#cbd5e1",
        showDebug: false,
        showVelocity: false,
        showAngleIndicator: false,
      },
    });
    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();
    // run the engine
    Runner.run(runner, engine.current);

    // add mouse control
    mouse = Mouse.create(render.canvas);

    let mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    // eep the mouse in sync with rendering
    render.mouse = mouse;

    // Make groundA move up and down
    Events.on(engine.current, "beforeUpdate", function () {
      let positionY =
        200 + 100 * Math.sin(engine.current.timing.timestamp * 0.0015);
      Body.setPosition(groundA, { x: 100, y: positionY }, true);
    });

    // Add all of the bodies to the world
    Composite.add(engine.current.world, [
      boxA,
      boxB,
      groundB,
      groundA,
      wallLeft,
      wallRight,
      mouseConstraint,
    ]);

    console.log(mouse);
    setCurrentMovable(boxA);
    boxB.render.fillStyle = "#475569";

    return () => {
      // Stop all processes
      Render.stop(render);
      Composite.clear(engine.current.world);
      Engine.clear(engine.current);
      Runner.stop(runner);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  // ===================== Handlers =====================

  const handleAddCircle = () => {
    const ball = Bodies.circle(400, 10, 10 + Math.random() * 30, {
      mass: 5,

      restitution: 0.9,
      friction: 0.005,
      render: {
        fillStyle: "#64748b",
      },
    });
    Composite.add(engine.current.world, [ball]);
  };

  const handleAddRectangle = () => {
    const rectangle = Bodies.rectangle(400, 10, 80, 80, {
      mass: 10,
      render: {
        fillStyle: "#64748b",
      },
    });
    Composite.add(engine.current.world, [rectangle]);
    console.log(Composite.allBodies(engine.current.world));
  };

  const handleAddGround = () => {
    const ground = Bodies.rectangle(400, 400, 800, 40, {
      isStatic: true,
      render: {
        fillStyle: "#334155",
      },
    });
    Composite.add(engine.current.world, [ground]);
    console.log(Composite.allBodies(engine.current.world));
  };

  const handleAddWalls = () => {
    const wallLeft = Bodies.rectangle(1, 10, 40, 800, {
      isStatic: true,
      render: {
        fillStyle: "#334155",
      },
    });
    const wallRight = Bodies.rectangle(800, 10, 40, 800, {
      isStatic: true,
      render: {
        fillStyle: "#334155",
      },
    });
    Composite.add(engine.current.world, [wallLeft, wallRight]);
    console.log(Composite.allBodies(engine.current.world));
  };

  const handleAddMouse = () => {
    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(engine.current.world, mouseConstraint);
  };

  const handleKeyDown = (e) => {
    // Arrow key codes
    const leftArrow = 37;
    const upArrow = 38;
    const rightArrow = 39;
    const downArrow = 40;
    const spaceBar = 32;

    // Define the force to be applied
    const force = 0.1;

    switch (e.keyCode) {
      case leftArrow:
        Body.applyForce(currentMovable, currentMovable.position, {
          x: -force,
          y: 0,
        });
        break;
      case upArrow:
        Body.applyForce(currentMovable, currentMovable.position, {
          x: 0,
          y: -force,
        });
        e.preventDefault(); // Prevent default behavior (scrolling)
        break;
      case rightArrow:
        Body.applyForce(currentMovable, currentMovable.position, {
          x: force,
          y: 0,
        });
        break;
      case downArrow:
        Body.applyForce(currentMovable, currentMovable.position, {
          x: 0,
          y: force,
        });
        console.log(currentMovable);
        e.preventDefault(); // Prevent default behavior (scrolling)
        break;
      case spaceBar: {
        // Remove the current movable object from the world
        Composite.remove(engine.current.world, currentMovable);

        // Reset the rendering options for the current movable object
        currentMovable.render.fillStyle = "#64748b";

        // Set the new current movable object
        const movableObjects = [boxA, boxB]; // Add more objects if needed
        const currentIndex = movableObjects.indexOf(currentMovable);
        const nextIndex = (currentIndex + 1) % movableObjects.length;
        const newCurrentMovable = movableObjects[nextIndex];
        setCurrentMovable(newCurrentMovable);

        // Highlight the new current movable object
        newCurrentMovable.render.fillStyle = "#ff0000"; // Change color to red (adjust as needed)

        // Add the new current movable object back to the world
        Composite.add(engine.current.world, newCurrentMovable);

        e.preventDefault();
        break;
      }
      default:
        break;
    }
  };

  return (
    <div>
      <div className="flex justify-center ">
        <div className="  w-[800px] bg-slate-300 shadow-inner">
          <div className="flex">
            <button
              className={buttonStyle}
              onClick={() => {
                handleAddCircle();
              }}
            >
              <div className="scale-75">
                <Icon type="circleIcon"></Icon>
              </div>
            </button>
            <button
              className={buttonStyle}
              onClick={() => {
                handleAddRectangle();
              }}
            >
              <div className="scale-75">
                <Icon type="squareIcon"></Icon>
              </div>
            </button>

            <button
              className={buttonStyle}
              onClick={() => {
                handleAddGround();
              }}
            >
              Ground
            </button>
            <button
              className={buttonStyle}
              onClick={() => {
                handleAddWalls();
              }}
            >
              Walls
            </button>
            <button
              className={buttonStyle}
              onClick={() => {
                handleAddMouse();
              }}
            >
              Mouse
            </button>
            <button
              className={buttonStyle}
              onClick={() => {
                Composite.clear(engine.current.world);
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center outline-none"
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
        tabIndex="0"
      >
        <div
          ref={scene}
          className=" h-[400px] w-[800px] bg-slate-400 shadow-md"
        ></div>
      </div>
    </div>
  );
};

export default Physics;
