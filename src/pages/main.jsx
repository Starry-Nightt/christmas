import React, { useEffect } from "react";
import styles from "./main.module.scss";
import Card from "../components/card";

function MainPage() {
  useEffect(() => {
    createTree();
  }, []);

  const createTree = () => {
    const width = 600;
    const height = 450;

    const swirls = [
      {
        color: "gold",
        nodes: 300,
        speed: -1,
        radius: 3,
      },
      {
        color: "green",
        nodes: 200,
        speed: 1,
        radius: 1.5,
      },
      {
        color: "blue",
        nodes: 80,
        speed: -3,
        radius: 6,
      },
      {
        color: "green",
        nodes: 250,
        speed: 3,
        radius: 3,
      },
    ];

    class Tree {
      constructor(w, h, swirls) {
        this.width = w;
        this.height = h;
        this.canvas = document.getElementById(styles.tree);
        this.context = this.canvas.getContext("2d");
        this.canvas.width = w;
        this.canvas.height = h;
        this.swirls = swirls.map(
          (s, i) => new TreeSwirl(this, s, i / swirls.length)
        );
        this.run();
      }

      run(t) {
        if (t === undefined) {
          t = 0;
        }
        window.requestAnimationFrame(this.run.bind(this));
        this.draw(t);
      }

      draw(t) {
        this.context.clearRect(0, 0, this.width, this.height);
        this.swirls.forEach((s) => s.drawBack(t));
        this.swirls.forEach((s) => s.drawFront(t));
      }
    }

    class TreeSwirl {
      constructor(tree, s, offset) {
        this.tree = tree;
        this.offset = offset;
        this.color = s.color;
        this.speed = s.speed;
        this.radius = s.radius;
        this.nodes = Array.from(
          { length: s.nodes },
          (_, i) => new SwirlNode(this, i / s.nodes)
        );
      }

      drawBack(t) {
        this.nodes.filter((n) => n.inBack(t)).forEach((n) => n.draw(t));
      }

      drawFront(t) {
        this.nodes.filter((n) => n.inFront(t)).forEach((n) => n.draw(t));
      }
    }

    class SwirlNode {
      constructor(swirl, offset) {
        this.swirl = swirl;
        this.offset = offset;
      }

      yPos() {
        const d = (this.t / 800) * this.swirl.speed;
        const od = d + this.offset * this.swirl.tree.height;
        return (
          (this.swirl.tree.height - (od % this.swirl.tree.height)) %
          this.swirl.tree.height
        );
      }

      xDeg() {
        return this.yPos() * 5 + 100 * this.swirl.offset;
      }

      xRad() {
        return (this.xDeg() * Math.PI) / 60;
      }

      xPos() {
        return (
          (Math.sin(this.xRad()) * this.swirl.tree.width * this.yPos()) /
            this.swirl.tree.height /
            3 +
          this.swirl.tree.width / 2
        );
      }

      shade() {
        return (Math.cos(this.xRad()) + 1) / 2;
      }

      inBack(t) {
        this.t = t;
        return Math.cos(this.xRad()) > 0;
      }

      inFront(t) {
        this.t = t;
        return !this.inBack(t);
      }

      draw(t) {
        this.t = t - 600;
        this.drawNode(this.swirl.radius * 0.6, this.shade() + 0.9);
        this.t = t - 180;
        this.drawNode(this.swirl.radius * 0.8, this.shade() + 0.4);
        this.t = t;
        this.drawNode(this.swirl.radius, this.shade());
      }

      drawNode(size, shade) {
        const c = this.swirl.tree.context;
        c.beginPath();
        c.arc(this.xPos(), this.yPos(), size, 0, 2 * Math.PI);
        c.fillStyle = this.swirl.color;
        c.fill();
        c.fillStyle = `rgba(0,0,0,${shade})`;
        c.fill();
      }
    }

    new Tree(width, height, swirls);
  };

  return (
    <main>

      <div className={styles.frame}>
        <canvas id={styles["tree"]}></canvas>
      </div>
      <div className={styles.card}>
        <Card/>
      </div>
      
    </main>
  );
}

export default MainPage