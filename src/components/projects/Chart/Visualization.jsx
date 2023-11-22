import { useRef, useEffect } from "react";
import {
  Engine,
  Render,
  Mouse,
  Bodies,
  Runner,
  Composite,
  MouseConstraint,
  Body,
} from "matter-js";

const buttonStyle =
  "w-fit border-b border-r uppercase text-slate-800 text-sm font-normal mr-1 active:brightness-95 active:scale-95 border-slate-400 bg-slate-300 px-6 py-2 transition-all duration-75 hover:brightness-105";

const Visualization = () => {
  const scene = useRef(null);

  // Init: create ENGINE, RENDER, RUNNER, COMPOSITE

  // In a React functional component we need to deal with its stateless aspect while Matter.js is a statefull engine.
  // We don't want to exploit the React nature to update the DOM on each update.
  // For that reason, useRef instead useState is used to add statefulness to the component.

  // An engine is a controller that manages updating the simulation of the world.

  // Create engine and store it in a ref.

  let engine = useRef(Engine.create());
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
  const ground = Bodies.rectangle(400, 400, 800, 40, {
    isStatic: true,
    render: {
      fillStyle: "#334155",
    },
  });

  useEffect(() => {
    const cw = 800;
    const ch = 400;
    // ==================== RENDERER
    // Create a renderer

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
    // ==================== BODIES
    // Create two boxes and a ground

    // Add all of the bodies to the world
    Composite.add(engine.current.world, [boxA, boxB, ground]);

    // run the renderer
    Render.run(render);

    // ==================== RUNNER
    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engine.current);

    // add mouse control
    let mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine.current, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(engine.current.world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

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

  const handleKeyDown = () => {
    Body.applyForce(boxA, boxA.position, { x: 0.1, y: 0 });
  };

  return (
    <div>
      <div className="flex justify-center ">
        <div className="  w-[800px] bg-slate-300">
          <div className="flex">
            <button
              className={buttonStyle}
              onClick={() => {
                handleAddCircle();
              }}
            >
              Spawn
            </button>
            <button
              className={buttonStyle}
              onClick={() => {
                Body.applyForce(boxA, boxA.position, { x: 0, y: -0.3 });
              }}
            >
              Jump
            </button>
            <button
              className={buttonStyle}
              onClick={() => {
                Body.rotate(boxA, 2);
              }}
            >
              Rotate
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center"
        onKeyDown={() => {
          handleKeyDown();
        }}
      >
        <div
          ref={scene}
          className="h-[400px] w-[800px] bg-slate-400 shadow-md"
        ></div>
      </div>
    </div>
  );
};

export default Visualization;
