import { useState, type FormEvent } from "react";
import { useLang } from "../content";
import "./Feedback.css";

const FEEDBACK_URL = "https://github.com/asunavlr/corvus-trial/issues/new";

const copy = {
  pt: {
    eyebrow: "Você também constrói o Corvus",
    title: "Avalie. Comente. Escolha o próximo voo.",
    lede: "Seu feedback vai direto para o roadmap público. Conte como foi usar o Corvus e qual recurso deve pousar primeiro.",
    rating: "Como está sua experiência?",
    ratingLabels: ["Muito ruim", "Ruim", "Regular", "Boa", "Excelente"],
    roadmap: "O que você quer primeiro?",
    options: [
      { value: "mobile", title: "Maestro no celular", body: "Controle remoto de agentes e vários projetos." },
      { value: "network", title: "Rede de Maestros", body: "Contexto e colaboração entre cockpits." },
      { value: "other", title: "Outra ideia", body: "Conte para a gente no comentário." },
    ],
    comment: "Seu comentário",
    placeholder: "O que funcionou bem? O que está faltando?",
    name: "Seu nome ou @ do GitHub (opcional)",
    submit: "Enviar feedback no GitHub",
    privacy: "Você revisa tudo antes de publicar. Nenhum dado é enviado automaticamente.",
    publicLink: "Ver feedbacks da comunidade",
    issueTitle: "Feedback da comunidade",
  },
  en: {
    eyebrow: "You help build Corvus",
    title: "Rate it. Comment. Pick the next flight.",
    lede: "Your feedback goes straight to the public roadmap. Tell us how Corvus worked for you and what should land first.",
    rating: "How is your experience?",
    ratingLabels: ["Very poor", "Poor", "Okay", "Good", "Excellent"],
    roadmap: "What do you want first?",
    options: [
      { value: "mobile", title: "Maestro on mobile", body: "Remote control for agents and multiple projects." },
      { value: "network", title: "Network of Maestros", body: "Context and collaboration across cockpits." },
      { value: "other", title: "Another idea", body: "Tell us about it in your comment." },
    ],
    comment: "Your comment",
    placeholder: "What worked well? What is still missing?",
    name: "Your name or GitHub @ (optional)",
    submit: "Send feedback on GitHub",
    privacy: "You review everything before publishing. No data is sent automatically.",
    publicLink: "See community feedback",
    issueTitle: "Community feedback",
  },
};

export default function Feedback() {
  const { lang } = useLang();
  const text = copy[lang];
  const [rating, setRating] = useState(0);
  const [roadmap, setRoadmap] = useState("mobile");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const choice = text.options.find((option) => option.value === roadmap)?.title ?? roadmap;
    const name = String(data.get("name") ?? "").trim() || (lang === "pt" ? "Anônimo" : "Anonymous");
    const comment = String(data.get("comment") ?? "").trim();
    const stars = rating ? `${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5)` : "—";
    const body = lang === "pt"
      ? `## Avaliação\n${stars}\n\n## Recurso mais esperado\n${choice}\n\n## Comentário\n${comment}\n\n— ${name}`
      : `## Rating\n${stars}\n\n## Most wanted feature\n${choice}\n\n## Comment\n${comment}\n\n— ${name}`;
    const query = new URLSearchParams({ title: `${text.issueTitle}: ${choice}`, body });
    window.open(`${FEEDBACK_URL}?${query.toString()}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section feedback" id="feedback">
      <div className="shell feedback__layout">
        <div className="feedback__intro">
          <p className="eyebrow" data-rise="sm">{text.eyebrow}</p>
          <h2 className="h2" data-rise>{text.title}</h2>
          <p className="lede" data-rise>{text.lede}</p>
          <a className="feedback__public mono" href="https://github.com/asunavlr/corvus-trial/issues" target="_blank" rel="noreferrer" data-rise="sm">
            {text.publicLink} ↗
          </a>
        </div>

        <form className="feedback__form" onSubmit={submit} data-rise>
          <fieldset className="feedback__field">
            <legend>{text.rating}</legend>
            <div className="feedback__stars" role="radiogroup">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className={star <= rating ? "is-on" : ""}
                  onClick={() => setRating(star)}
                  role="radio"
                  aria-checked={rating === star}
                  aria-label={`${star}: ${text.ratingLabels[star - 1]}`}
                >★</button>
              ))}
              <span className="mono">{rating ? text.ratingLabels[rating - 1] : "—"}</span>
            </div>
          </fieldset>

          <fieldset className="feedback__field">
            <legend>{text.roadmap}</legend>
            <div className="feedback__choices">
              {text.options.map((option) => (
                <label className={roadmap === option.value ? "is-selected" : ""} key={option.value}>
                  <input type="radio" name="roadmap" value={option.value} checked={roadmap === option.value} onChange={() => setRoadmap(option.value)} />
                  <span><strong>{option.title}</strong><small>{option.body}</small></span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="feedback__field">
            <span>{text.comment}</span>
            <textarea name="comment" placeholder={text.placeholder} required rows={4} />
          </label>
          <label className="feedback__field">
            <span>{text.name}</span>
            <input name="name" type="text" autoComplete="name" />
          </label>
          <button className="btn btn--primary feedback__submit" type="submit">{text.submit} ↗</button>
          <p className="feedback__privacy mono">{text.privacy}</p>
        </form>
      </div>
    </section>
  );
}
