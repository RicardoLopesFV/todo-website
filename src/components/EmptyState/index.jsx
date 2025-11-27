import "./index.scss";

export const EmptyState = () => {
  return (
    <div className="empty-state">
      {/* # ILUSTRAÇÃO SVG MINIMALISTA QUANDO NÃO TEM TAREFAS */}
      <svg
        className="empty-state__icon"
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L15 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5" // Deixa as linhas "escritas" mais suaves
        />
        <path
          d="M9 16L13 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </svg>
      <h3 className="empty-state__title">Everything clear!</h3>
      <p className="empty-state__description">
        Relax, you don't have any pendent tasks.
        <br />
        Or you can click on the <strong>+ Task</strong> button to create one.
      </p>
    </div>
  );
};
