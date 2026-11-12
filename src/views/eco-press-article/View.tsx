// Generated from public/eco-skin/PR_JM_joins.html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-eco-press-article);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View({ slug }: { slug: string }) {
  return (
    <ViewShell viewId="eco-press-article" className="v-eco-press-article cq-html" lang="en" bodyClassName="cq-body bg-surface-container-lowest text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <div id="ecosystem-chrome" data-active="Press" />
      {" "}
      <main id="release-root" className="w-full" data-default-slug={slug} />
    </ViewShell>
  );
}
export default View;
