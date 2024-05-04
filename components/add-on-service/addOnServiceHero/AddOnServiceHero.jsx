import React from "react";
import css from "./addOnServiceHero.module.scss";
import cx from "classnames";
import { SectionHeading } from "@/components/shared/SectionHeading/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const AddOnServiceHero = () => {
  return (
    <section className={cx("custom_container", css.hero_container)}>
      <div className={css.hero_left}>
        <SectionHeading extraStyles={css.hero_heading}>
          VIP Assistant Package
        </SectionHeading>
        <p className={cx("typoBody1", css.description)}>
          For clients who need expert help with KYC and KYB processes, we offer
          our VIP assistance package. Let us take care of the paperwork while
          you focus on what matters most.
        </p>
        <SectionHeading extraStyles={css.price}>Only 499  €</SectionHeading>
        <form action="/api/checkout_sessions" method="POST">
          <button
            type="submit"
            role="link"
            className={cx("hero_btn", css.add_to_cart_btn)}
          >
            Add to Cart
          </button>
        </form>
      </div>
      <div className={css.hero_right}>
        <div className={css.image_container}>
          <Image
            src="/add-on-service/hero.svg"
            alt="image"
            width={300}
            height={300}
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AddOnServiceHero;
