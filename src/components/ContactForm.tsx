import { Column, Heading, Text } from "@once-ui-system/core";
import { person } from "@/resources";
import styles from "./ContactForm.module.scss";

export function ContactForm() {
  return (
    <Column fillWidth maxWidth="m" gap="m" paddingX="l" marginBottom="40">
      <Heading as="h2" variant="heading-strong-xl">
        Get in touch
      </Heading>
      <Text onBackground="neutral-weak">
        Have a question or a project in mind? Send me a message.
      </Text>
      <form
        className={styles.form}
        action={`https://formsubmit.co/${person.email}`}
        method="POST"
      >
        <input type="hidden" name="_subject" value="New message from your portfolio" />
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="contact-website">Leave this field empty</label>
          <input
            id="contact-website"
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className={styles.fields}>
          <label className={styles.field}>
            <span>Name</span>
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label className={styles.field}>
            <span>Email</span>
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label className={styles.field}>
            <span>Subject</span>
            <input type="text" name="subject" required />
          </label>
          <label className={styles.field}>
            <span>Message</span>
            <textarea name="message" rows={6} required />
          </label>
          <button className={styles.submit} type="submit">
            Send message
          </button>
        </div>
      </form>
    </Column>
  );
}