import React, { useState } from "react";
import styled from "styled-components";

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 12px;
  padding: 28px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h1`
  margin: 0 0 16px;
  font-size: 22px;
  font-weight: 600;
  color: #111827;
`;

const Field = styled.div`
  margin-bottom: 14px;
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
  }
`;

const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 10px 12px;
  background: #111827;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.05s ease-in-out;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const Alert = styled.div<{ $tone: "success" | "error" }>`
  margin-top: 16px;
  padding: 12px 14px;
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.5;
  background-color: ${({ $tone }) =>
    $tone === "success" ? "#f0fdf4" : "#fef2f2"};
  border-left: 3px solid
    ${({ $tone }) => ($tone === "success" ? "#22c55e" : "#ef4444")};
  color: ${({ $tone }) => ($tone === "success" ? "#166534" : "#991b1b")};
`;

const Footer = styled.div`
  margin-top: 18px;
  text-align: center;
  font-size: 13px;
  color: #6b7280;
`;

const Link = styled.a`
  color: #111827;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const IndexPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [tone, setTone] = useState<"success" | "error">("success");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        setTone("error");
        setMessage(payload.message ?? "Registration failed.");
      } else {
        setTone("success");
        setMessage("Registration complete. Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      }
    } catch (error) {
      setTone("error");
      setMessage("Unable to register right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <Card>
        <Title>Create your account</Title>
        <form onSubmit={handleSubmit}>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
            />
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
            />
          </Field>
          <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Register"}
          </Button>
        </form>
        {message && <Alert $tone={tone}>{message}</Alert>}
        <Footer>
          Already have an account? <Link href="/">Sign in</Link>
        </Footer>
      </Card>
    </Page>
  );
};

export { IndexPage };
