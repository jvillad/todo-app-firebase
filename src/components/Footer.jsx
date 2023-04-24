function Footer(tasks) {
  return (
    <div className="footer-container">
      <section className="footer">
        <p>
          Todo&apos;s remaing: <span>{tasks.taskRemaining.length}</span>
        </p>
        <p>Fueled by ☕️</p>
      </section>
    </div>
  );
}

export default Footer;
