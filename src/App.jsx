import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import "./App.css";

import memory1 from "./assets/photos/memory1.jpg";
import memory2 from "./assets/photos/memory2.jpg";
import memory3 from "./assets/photos/memory3.jpg";
import memory4 from "./assets/photos/memory4.jpg";
import memory5 from "./assets/photos/memory5.jpg";
import memory6 from "./assets/photos/memory6.jpg";

function App() {
  const [stage, setStage] = useState("opening");

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}, [stage]);

  const openBirthday = () => {
    setStage("birthday");

    setTimeout(() => {
      confetti({
        particleCount: 240,
        spread: 130,
        startVelocity: 42,
        gravity: 0.8,
        origin: {
          x: 0.5,
          y: 0.58,
        },
      });
    }, 700);
  };

  const openMemories = () => {
    setStage("memories");
  };

  const openThings = () => {
    setStage("things");
  };

  const openGift = () => {
    setStage("gift");
  };

  const openLetter = () => {
    setStage("letter");
  };

  const openFinale = () => {
    setStage("finale");

    setTimeout(() => {
      confetti({
        particleCount: 220,
        spread: 140,
        startVelocity: 38,
        gravity: 0.75,
        origin: {
          x: 0.5,
          y: 0.5,
        },
      });
    }, 700);
  };

  return (
    <AnimatePresence mode="wait">
      {stage === "opening" && (
        <Opening
          key="opening"
          onComplete={openBirthday}
        />
      )}

      {stage === "birthday" && (
        <BirthdayReveal
          key="birthday"
          openMemories={openMemories}
        />
      )}

      {stage === "memories" && (
        <Memories
          key="memories"
          onNext={openThings}
        />
      )}

      {stage === "things" && (
        <ThingsISay
          key="things"
          onNext={openGift}
        />
      )}

      {stage === "gift" && (
        <Gift
          key="gift"
          onNext={openLetter}
        />
      )}

      {stage === "letter" && (
        <FinalLetter
          key="letter"
          onNext={openFinale}
        />
      )}

      {stage === "finale" && (
        <Finale key="finale" />
      )}
    </AnimatePresence>
  );
}


/* =====================================================
   OPENING — THE MYSTERY
===================================================== */

function Opening({ onComplete }) {
  const [phase, setPhase] = useState(0);
  const [doorOpening, setDoorOpening] = useState(false);

  const enterQuietly = () => {
    setPhase(1);
  };

  const knockOnDoor = () => {
    setPhase(2);

    setTimeout(() => {
      setPhase(3);
    }, 6500);
  };

  const openDoor = () => {
    setDoorOpening(true);

    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  return (
    <motion.section
      className="opening-new"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.08,
        filter: "blur(8px)",
      }}
      transition={{ duration: 1 }}
    >
      {/* =================================================
          ATMOSPHERE
      ================================================= */}

      <motion.div
        className="opening-glow"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="opening-moon">
        <motion.div
          animate={{
            opacity: [0.65, 1, 0.65],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="opening-particles">
        <span>·</span>
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>·</span>
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
      </div>

      <div className="opening-vignette" />


      {/* =================================================
          TOP DATE
      ================================================= */}

      <motion.div
        className="opening-top"
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 0.5,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 1.5,
        }}
      >
        OCTOBER 02
      </motion.div>


      {/* =================================================
          MYSTERIOUS FIGURE
      ================================================= */}

      <motion.div
        className="mystery-scene"
        animate={{
          opacity: phase >= 3 ? 0.25 : 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <motion.div
          className="mystery-shadow"
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.55, 0.75, 0.55],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="mystery-figure"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="figure-hair" />
          <div className="figure-head">
            <span className="figure-eye left" />
            <span className="figure-eye right" />
          </div>
          <div className="figure-body" />
          <div className="figure-arm left" />
          <div className="figure-arm right" />
        </motion.div>

        <motion.div
          className="figure-light"
          animate={{
            opacity: [0.08, 0.18, 0.08],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </motion.div>


      {/* =================================================
          PHASE 0 — SOMETHING IS WAITING
      ================================================= */}

      <AnimatePresence mode="wait">
        {phase === 0 && (
          <motion.div
            key="phase-zero"
            className="opening-content"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.98,
            }}
            transition={{
              duration: 1.2,
            }}
          >
            <motion.span
              className="opening-small"
              initial={{
                opacity: 0,
                letterSpacing: "10px",
              }}
              animate={{
                opacity: 0.65,
                letterSpacing: "4px",
              }}
              transition={{
                delay: 0.8,
                duration: 1.8,
              }}
            >
              SOMEWHERE IN THE DARK...
            </motion.span>

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.5,
                duration: 1.1,
              }}
            >
              Someone is
              <br />
              waiting for you.
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.55,
              }}
              transition={{
                delay: 2.4,
                duration: 1,
              }}
            >
              It's very quiet tonight...
            </motion.p>

            <motion.button
              className="opening-button"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 3,
              }}
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={enterQuietly}
            >
              Enter quietly
              <span>→</span>
            </motion.button>
          </motion.div>
        )}


        {/* =================================================
            PHASE 1 — MUMMY?
        ================================================= */}

        {phase === 1 && (
          <motion.div
            key="phase-one"
            className="opening-content"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <motion.span
              className="opening-small"
              animate={{
                opacity: [0.35, 0.9, 0.35],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              WAIT...
            </motion.span>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
            >
              Mummy...?
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.7,
              }}
              transition={{
                delay: 0.8,
              }}
            >
              Did you hear that?
              <br />
              I think someone's at the door...
            </motion.p>

            <motion.button
              className="opening-button"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.6,
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={knockOnDoor}
            >
              Let's check
              <span>→</span>
            </motion.button>
          </motion.div>
        )}


        {/* =================================================
            PHASE 2 — KNOCK
        ================================================= */}

        {phase === 2 && (
          <motion.div
            key="phase-two"
            className="opening-content knock-content"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <motion.div
              className="knock-symbol"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [-3, 3, -3, 0],
              }}
              transition={{
                duration: 0.55,
                repeat: 2,
              }}
            >
              ✊
            </motion.div>

            <motion.span
              className="opening-small"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.75,
              }}
            >
              KNOCK...
            </motion.span>

            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.2,
                type: "spring",
              }}
            >
              Knock.
              <br />
              Knock.
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.6,
              }}
              transition={{
                delay: 0.7,
              }}
            >
              Someone has a surprise for you...
            </motion.p>
          </motion.div>
        )}


        {/* =================================================
            PHASE 3 — OPEN THE DOOR
        ================================================= */}

        {phase === 3 && (
          <motion.div
            key="phase-three"
            className="opening-content"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <motion.span
              className="opening-small"
              initial={{
                opacity: 0,
                letterSpacing: "8px",
              }}
              animate={{
                opacity: 0.7,
                letterSpacing: "4px",
              }}
              transition={{
                duration: 1,
              }}
            >
              OKAY...
            </motion.span>

            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.3,
                duration: 0.9,
              }}
            >
              Open the door.
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.7,
              }}
              transition={{
                delay: 0.9,
              }}
            >
              There's something beautiful
              <br />
              waiting on the other side.
            </motion.p>

            <motion.button
              className="opening-button door-button"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.5,
              }}
              whileHover={{
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.94,
              }}
              onClick={openDoor}
            >
              Open the door
              <span>✦</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =================================================
          TAP HINT
      ================================================= */}

      {phase < 3 && (
        <motion.div
          className="opening-hint"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            delay: 3,
            duration: 2.5,
            repeat: Infinity,
          }}
        >
          {phase === 0 ? "A LITTLE SURPRISE AWAITS" : "FOLLOW THE SOUND..."}
        </motion.div>
      )}


      {/* =================================================
          DOOR OPENING TRANSITION
      ================================================= */}

      <AnimatePresence>
        {doorOpening && (
          <motion.div
            className="door-transition"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.div
              className="door-light"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 3,
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
            />

            <motion.div
              className="door-message"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
              }}
            >
              ✨
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}


/* =====================================================
   BIRTHDAY REVEAL
===================================================== */

function BirthdayReveal({ openMemories }) {
  return (
    <motion.section
      className="birthday-screen-new"
      initial={{
        opacity: 0,
        scale: 1.08,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.96,
      }}
      transition={{
        duration: 1.4,
        ease: "easeOut",
      }}
    >
      {/* Warm reveal glow */}

      <motion.div
        className="birthday-glow"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1.5,
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
        }}
      />

      <div className="birthday-particles">
        <span>✦</span>
        <span>✧</span>
        <span>·</span>
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>✦</span>
      </div>

      {/* Balloons */}

      <motion.div
        className="reveal-balloon balloon-one"
        initial={{
          y: "100vh",
          rotate: -20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          rotate: 5,
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
          delay: 0.2,
        }}
      >
        🎈
      </motion.div>

      <motion.div
        className="reveal-balloon balloon-two"
        initial={{
          y: "100vh",
          rotate: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          rotate: -5,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 0.35,
        }}
      >
        🎈
      </motion.div>

      <motion.div
        className="reveal-balloon balloon-three"
        initial={{
          y: "100vh",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2.2,
          delay: 0.5,
        }}
      >
        🎈
      </motion.div>


      <div className="birthday-content">

        <motion.span
          className="birthday-eyebrow"
          initial={{
            opacity: 0,
            letterSpacing: "12px",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "4px",
          }}
          transition={{
            delay: 0.7,
            duration: 1.5,
          }}
        >
          THE SECRET IS OUT
        </motion.span>

        <motion.p
          className="birthday-intro-new"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
          }}
        >
          The darkness was only hiding one thing...
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.55,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 1.7,
            duration: 1.3,
            type: "spring",
            stiffness: 100,
          }}
        >
          HAPPY
          <br />
          <span>BIRTHDAY</span>
          <br />
          <strong>MOMMY! ❤️</strong>
        </motion.h1>

        <motion.div
          className="birthday-divider"
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 100,
            opacity: 1,
          }}
          transition={{
            delay: 2.5,
            duration: 1,
          }}
        />

        <motion.p
          className="birthday-subtitle-new"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.8,
          }}
        >
          For the woman who made my world
          <br />
          feel like home. ❤️
        </motion.p>

        <motion.button
          className="story-button reveal-button"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 3.5,
          }}
          whileHover={{
            y: -4,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={openMemories}
        >
          Let's go back in time
          <span>→</span>
        </motion.button>

      </div>
    </motion.section>
  );
}


/* =====================================================
   MEMORIES
===================================================== */

function Memories({ onNext }) {
  const memories = [
    {
      image: memory1,
      year: "CHAPTER 01",
      title: "Where it all began",
      text: "Before I knew what memories were, there was you.",
    },
    {
      image: memory2,
      year: "CHAPTER 02",
      title: "My little world",
      text: "So many of my happiest childhood moments had you somewhere in them.",
    },
    {
      image: memory3,
      year: "CHAPTER 03",
      title: "Growing up",
      text: "Some things changed as I grew older. But you were always there.",
    },
    {
      image: memory4,
      year: "CHAPTER 04",
      title: "Little moments",
      text: "The ordinary days somehow became some of my favourite memories.",
    },
    {
      image: memory5,
      year: "CHAPTER 05",
      title: "Us",
      text: "Different days, different places, same bond.",
    },
    {
      image: memory6,
      year: "CHAPTER 06",
      title: "And today...",
      text: "I look back at all these moments and realise how lucky I am.",
    },
  ];

  return (
    <motion.section
      className="memories-screen"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        y: -30,
      }}
      transition={{
        duration: 1,
      }}
    >
      <motion.div
        className="memories-header"
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <span>OUR STORY</span>

        <h2>
          A little journey
          <br />
          through our memories
          <br />
          <em>❤️</em>
        </h2>

        <p>
          Scroll slowly...
          <br />
          there's a lot of love hidden here.
        </p>
      </motion.div>

      <div className="memory-list">
        {memories.map((memory, index) => (
          <motion.article
            className="memory-card"
            key={memory.image}
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              delay: index % 2 === 0 ? 0 : 0.15,
            }}
          >
            <div className="memory-image-wrapper">
              <motion.img
                src={memory.image}
                alt={memory.title}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.8,
                }}
              />

              <div className="memory-image-overlay" />

              <span className="memory-chapter">
                {memory.year}
              </span>
            </div>

            <div className="memory-text">
              <h3>{memory.title}</h3>
              <p>{memory.text}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="memories-ending"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <span>AND THROUGH IT ALL...</span>

        <h2>
          One thing
          <br />
          never changed.
        </h2>

        <p>
          You were always there.
          <br />
          And you always will be. ❤️
        </p>

        <motion.button
          className="story-button memories-next"
          onClick={onNext}
          whileTap={{
            scale: 0.95,
          }}
        >
          There's more I want to say
          <span>→</span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}


/* =====================================================
   THINGS I NEVER SAY ENOUGH
===================================================== */

function ThingsISay({ onNext }) {
  const messages = [
    {
      number: "01",
      title: "Thank you",
      text: "For all the little things you do that I sometimes forget to notice.",
    },
    {
      number: "02",
      title: "You are my safe place",
      text: "No matter how old I grow, a part of me will always feel at home with you.",
    },
    {
      number: "03",
      title: "I am proud of you",
      text: "Not just because you are my mother, but because of the person you are.",
    },
    {
      number: "04",
      title: "You mean more than I say",
      text: "I may not always say it, but I carry your love with me every single day.",
    },
    {
      number: "05",
      title: "And finally...",
      text: "I love you, Mummy. More than these little words could ever explain. ❤️",
    },
  ];

  return (
    <motion.section
      className="things-screen"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        y: -30,
      }}
      transition={{
        duration: 1,
      }}
    >
      <motion.div
        className="things-header"
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <span>A LITTLE CONFESSION</span>

        <h2>
          Things I Never
          <br />
          Say Enough
          <br />
          <em>💌</em>
        </h2>

        <p>
          Some things are easier to write than to say.
        </p>
      </motion.div>

      <div className="things-list">
        {messages.map((message, index) => (
          <motion.div
            className="message-card"
            key={message.number}
            initial={{
              opacity: 0,
              y: 70,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
          >
            <span className="message-number">
              {message.number}
            </span>

            <div>
              <h3>{message.title}</h3>
              <p>{message.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="things-ending"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        <span>JUST BETWEEN US...</span>

        <p>
          I don't always say these things.
          <br />
          But I hope you always know them. ❤️
        </p>

        <motion.button
          className="story-button"
          onClick={onNext}
          whileHover={{
            y: -4,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          I have something for you 🎁
        </motion.button>
      </motion.div>
    </motion.section>
  );
}


/* =====================================================
   GIFT
===================================================== */

function Gift({ onNext }) {
  const [opened, setOpened] = useState(false);

  const openGift = () => {
    setOpened(true);

    confetti({
      particleCount: 160,
      spread: 110,
      startVelocity: 34,
      gravity: 0.8,
      origin: {
        x: 0.5,
        y: 0.55,
      },
    });
  };

  return (
    <motion.section
      className="gift-screen"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.97,
      }}
      transition={{
        duration: 1,
      }}
    >
      <AnimatePresence mode="wait">

        {!opened ? (
          <motion.div
            className="gift-content"
            key="closed"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
          >
            <motion.span
              className="gift-label"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            >
              ONE LITTLE SURPRISE
            </motion.span>

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
            >
              I got something
              <br />
              for you...
            </motion.h2>

            <motion.button
              className="gift-box"
              onClick={openGift}
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.9,
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="gift-lid">🎀</span>
              <span className="gift-body">🎁</span>
            </motion.button>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.65,
              }}
              transition={{
                delay: 0.6,
              }}
            >
              Tap the gift ❤️
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            className="gift-reveal"
            key="opened"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              type: "spring",
            }}
          >
            <span className="gift-label">
              FOR MY MUMMY ❤️
            </span>

            <h2>
              If I could give you
              <br />
              one thing...
            </h2>

            <p>
              I wouldn't give you something that could be wrapped.
              <br />
              I would give you all the happiness,
              <br />
              love and peace that you have given me.
            </p>

            <motion.div
              className="gift-heart"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              ❤️
            </motion.div>

            <p className="gift-small">
              Because you deserve the whole world.
            </p>

            <motion.button
              className="story-button"
              onClick={onNext}
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Read my letter 💌
              <span>→</span>
            </motion.button>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.section>
  );
}


/* =====================================================
   FINAL LETTER
===================================================== */

function FinalLetter({ onNext }) {
  return (
    <motion.section
      className="letter-screen"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        y: -30,
      }}
      transition={{
        duration: 1,
      }}
    >
      <motion.div
        className="letter-container"
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        <motion.span
          className="letter-label"
          initial={{
            opacity: 0,
            letterSpacing: "8px",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "4px",
          }}
          transition={{
            duration: 1.5,
          }}
        >
          FROM YOUR LITTLE GIRL ❤️
        </motion.span>

        <motion.div
          className="letter-paper"
          initial={{
            opacity: 0,
            scale: 0.88,
            rotateX: 12,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateX: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 1.2,
          }}
        >
          <p className="letter-dear">
            Dear Mummy,
          </p>

          <p>
            I don't think I say this enough, but thank you for
            being there through every little moment of my life.
          </p>

          <p>
            From the days when I needed you for everything,
            to the days when I'm slowly finding my own way,
            your love has always been my biggest comfort.
          </p>

          <p>
            You have given me so much more than I could ever
            put into words — your time, your patience, your
            strength, your care and most importantly, your love.
          </p>

          <p>
            If I could wish one thing for you today, it would be
            that life gives you back all the happiness you have
            given to everyone around you.
          </p>

          <p>
            I may grow older, but I'll always be your little girl.
            And no matter where life takes me, a part of my heart
            will always belong to you.
          </p>

          <p className="letter-love">
            I love you more than words can say. ❤️
          </p>

          <p className="letter-sign">
            Happy Birthday, Mummy.
            <br />
            With all my love,
            <br />
            Your Akshara ❤️
          </p>
        </motion.div>

        <motion.div
          className="letter-next"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
          }}
        >
          <p>
            One last thing...
          </p>

          <motion.button
            className="story-button"
            onClick={onNext}
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Take me to the end ✨
            <span>→</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}


/* =====================================================
   FINALE
===================================================== */

function Finale() {
  return (
    <motion.section
      className="finale-screen"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
    >
      <motion.div
        className="finale-glow"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="finale-particles">
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>·</span>
      </div>

      <motion.div
        className="finale-content"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <motion.div
          className="finale-photo-wrapper"
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 1.2,
          }}
        >
          <motion.img
            src={memory6}
            alt="A beautiful memory with Mummy"
            animate={{
              scale: [1, 1.035, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="finale-photo-overlay" />
        </motion.div>

        <motion.span
          className="finale-label"
          initial={{
            opacity: 0,
            letterSpacing: "8px",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "4px",
          }}
          transition={{
            delay: 1.2,
            duration: 1.2,
          }}
        >
          AND ONE LAST THING ❤️
        </motion.span>

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
        >
          HAPPY BIRTHDAY,
          <br />
          <span>MOMMY!</span> ❤️
        </motion.h1>

        <motion.div
          className="finale-line"
          initial={{
            width: 0,
          }}
          animate={{
            width: 90,
          }}
          transition={{
            delay: 2.3,
            duration: 1,
          }}
        />

        <motion.p
          className="finale-message"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.6,
            duration: 1,
          }}
        >
          No matter how old I grow,
          <br />
          I'll always be your little girl.
        </motion.p>

        <motion.div
          className="finale-heart"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 3.2,
            type: "spring",
            stiffness: 180,
          }}
        >
          ❤️
        </motion.div>

        <motion.p
          className="finale-signature"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.65,
          }}
          transition={{
            delay: 3.8,
          }}
        >
          — Akshara
        </motion.p>
      </motion.div>

      <div className="finale-sparkle sparkle-one">✦</div>
      <div className="finale-sparkle sparkle-two">✧</div>
      <div className="finale-sparkle sparkle-three">✦</div>
      <div className="finale-sparkle sparkle-four">✧</div>
    </motion.section>
  );
}

export default App;