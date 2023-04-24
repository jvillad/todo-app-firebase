function Header(tasks) {
  return (
    <section className="text-center py-10">
      {tasks.taskRemaining.length !== 0 ? (
        <p>
          You have <span>{tasks.taskRemaining.length} </span>
          {tasks.taskRemaining.length > 1 ? 'tasks' : 'task'} remaining.
        </p>
      ) : (
        <p className="text-stone-800">You have no todo&apos;s</p>
      )}
    </section>
  );
}

export default Header;
