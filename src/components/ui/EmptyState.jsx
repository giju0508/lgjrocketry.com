const EmptyState = ({ title, description, action }) => {
  return (
    <div className="rounded-3xl border border-dashed border-orange-400/24 bg-black/25 px-6 py-10 text-center backdrop-blur-xl">
      <div className="mx-auto max-w-xl space-y-3">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        {description ? <p className="text-slate-300">{description}</p> : null}
        {action ? <div className="pt-2">{action}</div> : null}
      </div>
    </div>
  );
};

export default EmptyState;
