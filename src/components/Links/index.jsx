import classes from "src/components/Links/Links.module.css";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation \u2192",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn \u2192",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/master/examples",
    title: "Examples →",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href:
      "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy →",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export function Links() {
  return (
    <div className={classes.grid}>

      {ITEMS.map(item => {
        return (
          <a key={item.href} href="https://nextjs.org/docs" className={classes.card}>
        <h3 className={classes.title}>{item.title}</h3>
        <p className={classes.description}>{item.description}</p>
      </a>
        )

      })}
{/*
      <a href="https://nextjs.org/docs" className={classes.card}>
        <h3 className={classes.title}>Documentation &rarr;</h3>
        <p className={classes.description}>Find in-depth information about Next.js features and API.</p>
      </a>

      <a href="https://nextjs.org/learn" className={classes.card}>
        <h3>Learn &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/master/examples"
        className={classes.card}
      >
        <h3>Examples &rarr;</h3>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={classes.card}
      >
        <h3>Deploy &rarr;</h3>
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
      </a> */}
    </div>
  );
}
