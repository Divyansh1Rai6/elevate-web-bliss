import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import svcEcom from "@/assets/service-ecom.jpg";

export const Route = createFileRoute("/ecommerce-consultancy")({ component: Page });

function Page() {
  return (
    <ServiceDetail
      eyebrow="E-commerce Consultancy"
      title="Storefronts that turn browsers into buyers."
      intro="Storefront strategy, marketplace onboarding, and conversion optimization across Shopify, Magento, and custom stacks — built to grow with your catalog."
      img={svcEcom}
      deliverables={[
        "Storefront strategy and platform selection",
        "Shopify, Magento, and custom storefront builds",
        "Marketplace onboarding (Amazon, Flipkart, etc.)",
        "Payment gateway and logistics integration",
        "Conversion rate optimization and A/B testing",
        "Inventory and order management workflows",
      ]}
      approach={[
        { step: "Platform Assessment", body: "We evaluate your catalog, volume, and growth plans to recommend the right platform." },
        { step: "Storefront Design", body: "Conversion-focused design across product, cart, and checkout flows." },
        { step: "Integration", body: "Payments, shipping, and inventory systems connected end-to-end." },
        { step: "Launch", body: "Staged rollout with monitoring for a smooth go-live." },
        { step: "Optimize", body: "A/B testing on key flows to lift conversion and average order value." },
        { step: "Scale", body: "Marketplace expansion and catalog growth support." },
      ]}
    />
  );
}
