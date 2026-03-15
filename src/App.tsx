import { useState } from "react";
import "./App.css";

import Greeting from "./exercises/ra1/block1/ex1-greeting/Greeting";
import UserInfo from "./exercises/ra1/block1/ex2-user-info/UserInfo";
import Avatar from "./exercises/ra1/block1/ex3-avatar/Avatar";
import { TaskList } from "./exercises/ra1/block1/ex4-task-list/TaskList";
import { Card, CardHeader,CardBody,CardFooter } from "./exercises/ra1/block1/ex5-card-composition";

// ====== Datos Prueba ======
const tasks = [
  { id: 1, title: "Aprender React", completed: false },
  { id: 2, title: "Practicar", completed: true },
  { id: 3, title: "Crear una Card", completed: false }
]


// ====== Tipos ======
type View = "home" | "block" | "exercise" | "miniapp";

type BlockKey = "ej1-block1" | "ej1-block2" | "ej1-block3";

type ExerciseItem = {
  id: string;
  title: string;
  component: React.ReactNode;
};

type MiniAppItem = {
  id: string;
  title: string;
  component: React.ReactNode;
};

// ====== Configuración de Ejercicios 1 por bloques ======
const exercisesByBlock: Record<BlockKey, ExerciseItem[]> = {
  "ej1-block1": [
    {
      id: "greeting",
      title: "Greeting",
      component: <Greeting name="Andrea" />,
    },
    {
      id: "userinfo",
      title: "UserInfo",
      component: (
        <UserInfo
          name="Andrea"
          age={29}
          email="ae@gmail.com"
        />
      ),
    },
    {
      id: "avatar",
      title: "Avatar",
      component: (
        <>
          <Avatar
            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Caleb"
            alt="Caleb Celeb"
            size={70}
          />
          <Avatar
            alt="Alicia Daganzo"
          />
        </>
      ),
    },
    {
      id: "tasklist",
      title: "Task List simple",
      component: (
        <>
          <TaskList tasks={tasks}/>
        </>
      ),
    },
    {
      id: "card",
      title: "Card",
      component: (
        <>
        <Card>
          <CardHeader title="Producte" subtitle="Descripció breu" />
          <CardBody>
            <p>Contingut del producte</p>
          </CardBody>
          <CardFooter>
            <button>Comprar</button>
          </CardFooter>
        </Card>
        </>
      )
    }
  ],
  "ej1-block2": [],
  "ej1-block3": [],
};

// ====== Configuración de mini apps de Ejercicios 2 ======
const miniApps: MiniAppItem[] = [
  {
    id: "hello-world",
    title: "Hello World",
    component: <h2>Mini app Hello World</h2>,
  },
  {
    id: "task-list",
    title: "Task List",
    component: <h2>Mini app Task List</h2>,
  },
];

export default function App() {
  const [view, setView] = useState<View>("home");
  const [selectedBlock, setSelectedBlock] = useState<BlockKey | null>(null);
  const [selectedExerciseId, setSelectedExerciseId] = useState<string | null>(null);
  const [selectedMiniAppId, setSelectedMiniAppId] = useState<string | null>(null);

  // ====== Datos derivados ======
  const currentExercises = selectedBlock ? exercisesByBlock[selectedBlock] : [];

  const selectedExercise = currentExercises.find(
    (exercise) => exercise.id === selectedExerciseId
  );

  const selectedMiniApp = miniApps.find(
    (miniApp) => miniApp.id === selectedMiniAppId
  );

  // ====== Navegación ======
  const openBlock = (block: BlockKey) => {
    setSelectedBlock(block);
    setSelectedExerciseId(null);
    setSelectedMiniAppId(null);
    setView("block");
  };

  const openExercise = (exerciseId: string) => {
    setSelectedExerciseId(exerciseId);
    setView("exercise");
  };

  const openMiniApp = (miniAppId: string) => {
    setSelectedMiniAppId(miniAppId);
    setSelectedBlock(null);
    setSelectedExerciseId(null);
    setView("miniapp");
  };

  const goHome = () => {
    setView("home");
    setSelectedBlock(null);
    setSelectedExerciseId(null);
    setSelectedMiniAppId(null);
  };

  const goBackToBlock = () => {
    setSelectedExerciseId(null);
    setView("block");
  };

  // ====== Vista de ejercicio ======
  if (view === "exercise" && selectedExercise) {
    return (
      <main className="container">
        <section className="panel">
          <button className="backButton" onClick={goBackToBlock}>
            ← Volver al bloque
          </button>

          <h1>{selectedExercise.title}</h1>

          <div className="exerciseBox">{selectedExercise.component}</div>
        </section>
      </main>
    );
  }

  // ====== Vista de mini app ======
  if (view === "miniapp" && selectedMiniApp) {
    return (
      <main className="container">
        <section className="panel">
          <button className="backButton" onClick={goHome}>
            ← Volver al inicio
          </button>

          <h1>{selectedMiniApp.title}</h1>

          <div className="exerciseBox">{selectedMiniApp.component}</div>
        </section>
      </main>
    );
  }

  // ====== Vista de bloque ======
  if (view === "block" && selectedBlock) {
    return (
      <main className="container">
        <section className="panel">
          <button className="backButton" onClick={goHome}>
            ← Volver al inicio
          </button>

          <h1>{selectedBlock}</h1>

          <div className="grid">
            {currentExercises.length > 0 ? (
              currentExercises.map((exercise) => (
                <button
                  key={exercise.id}
                  className="cardButton"
                  onClick={() => openExercise(exercise.id)}
                >
                  {exercise.title}
                </button>
              ))
            ) : (
              <p>No hay ejercicios todavía en este bloque.</p>
            )}
          </div>
        </section>
      </main>
    );
  }

  // ====== Home ======
  return (
    <main className="container">
      <section className="panel">
        <div className="welcomeBox">
          <h1>Bienvenido/a</h1>
        </div>

        <div className="sectionTitle">Ejercicios 1</div>
        <div className="grid">
          <button className="cardButton" onClick={() => openBlock("ej1-block1")}>
            Block1
          </button>
          <button className="cardButton" onClick={() => openBlock("ej1-block2")}>
            Block2
          </button>
          <button className="cardButton" onClick={() => openBlock("ej1-block3")}>
            Block3
          </button>
        </div>

        <div className="sectionTitle">Ejercicios 2</div>
        <div className="grid">
          {miniApps.map((miniApp) => (
            <button
              key={miniApp.id}
              className="cardButton"
              onClick={() => openMiniApp(miniApp.id)}
            >
              {miniApp.title}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}