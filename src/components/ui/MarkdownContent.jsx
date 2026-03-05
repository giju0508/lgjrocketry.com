import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const components = {
  h1: ({ ...props }) => (
    <h1 className="mt-8 text-3xl font-semibold text-white first:mt-0" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="mt-8 text-2xl font-semibold text-white first:mt-0" {...props} />
  ),
  h3: ({ ...props }) => (
    <h3 className="mt-6 text-xl font-semibold text-white first:mt-0" {...props} />
  ),
  p: ({ ...props }) => (
    <p className="my-3 leading-7 text-slate-300" {...props} />
  ),
  ul: ({ ...props }) => (
    <ul className="my-3 list-disc space-y-1.5 pl-6 text-slate-300" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="my-3 list-decimal space-y-1.5 pl-6 text-slate-300" {...props} />
  ),
  table: ({ ...props }) => (
    <div className="my-6 overflow-x-auto">
      <div className="mx-auto w-fit rounded-2xl border border-orange-300/28 bg-black/30 p-1.5">
        <table
          className="w-max min-w-[24rem] table-auto border-separate border-spacing-0 text-sm sm:min-w-[28rem]"
          {...props}
        />
      </div>
    </div>
  ),
  thead: ({ ...props }) => (
    <thead className="bg-orange-400/[0.06]" {...props} />
  ),
  th: ({ ...props }) => (
    <th
      className="whitespace-nowrap border-b border-white/10 px-5 py-3 text-left font-semibold text-white first:rounded-tl-xl first:border-r first:border-white/10 last:rounded-tr-xl"
      {...props}
    />
  ),
  td: ({ ...props }) => (
    <td
      className="border-b border-white/5 px-5 py-3 text-slate-300 first:border-r first:border-white/10 last:text-right"
      {...props}
    />
  ),
  code: ({ inline, ...props }) =>
    inline ? (
      <code
        className="rounded-md border border-white/10 bg-black/30 px-1.5 py-0.5 text-orange-200"
        {...props}
      />
    ) : (
      <code
        className="block overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-slate-200"
        {...props}
      />
    ),
};

const MarkdownContent = ({ content }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownContent;
