// Generated from public/eco-skin/ER_blog.html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-eco-blog-article);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View({ slug }: { slug: string }) {
  return (
    <ViewShell viewId="eco-blog-article" className="v-eco-blog-article cq-html" lang="en" bodyClassName="cq-body bg-[#F4F6FA] text-on-surface antialiased font-sans selection:bg-primary-fixed selection:text-on-primary-fixed">
      <div id="ecosystem-chrome" data-active="Insights" />
      {" "}
      <main id="article-root" className="w-full" data-default-slug={slug} />
    </ViewShell>
  );
}
export default View;
