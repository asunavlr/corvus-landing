import { motion } from "motion/react";
import { VERIFY } from "../data/content";
import { inView, inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

/** Um relatório de verificação como o agente devolve — a prova, não a promessa. */
const REPORT = [
  { status: "ok", route: "/login", note: "200 · formulário preenchido, sessão criada" },
  { status: "ok", route: "/clientes", note: "200 · 42 linhas na tabela" },
  { status: "warn", route: "/relatorios", note: "200 · console: Warning sobre chave duplicada" },
  { status: "fail", route: "/admin/usuarios", note: "401 · voltou para /login" },
];

export default function Verify() {
  return (
    <section className="section" id="verificacao">
      <div className="shell verify">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>
            Entrega verificada
          </motion.p>
          <motion.h2 className="h2" variants={rise}>
            “Está funcionando” não é entrega
          </motion.h2>
          <motion.p className="lede" variants={rise}>
            Agente que mexe numa tela e diz que deu certo sem abrir é como o 401 aparece dois
            minutos depois, do seu lado. No Corvus, mexeu em tela, rota, permissão ou login,
            alguém abre — e conta o que viu.
          </motion.p>

          <motion.div className="verify__list" variants={stagger(0.08, 0.1)}>
            {VERIFY.map((item) => (
              <motion.div key={item.title} className="verify__item" variants={rise}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="report" variants={stagger(0.08, 0.2)} {...inView}>
          <motion.div className="report__head" variants={riseSmall}>
            <span className="mono">verificar_no_navegador</span>
            <span className="report__tag mono">playwright</span>
          </motion.div>
          {REPORT.map((row) => (
            <motion.div key={row.route} className="report__row" variants={riseSmall}>
              <span className={`report__pip report__pip--${row.status}`} aria-hidden="true" />
              <span className="report__route mono">{row.route}</span>
              <span className="report__note">{row.note}</span>
            </motion.div>
          ))}
          <motion.p className="report__foot" variants={riseSmall}>
            Sem esse relato, a demanda fica <strong>travada</strong> com a nota “sem verificação”.
            Nunca entregue.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
