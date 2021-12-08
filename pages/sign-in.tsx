import React from 'react';
import Button from "../components/Button";
import Field from "../components/Field";
import Input from "../components/Input";
import Page from "../components/Page"

const SignInPage: React.FC = () => {
    return (
        <Page title="Sign In">
            <form>
                <Field label="Email">
                    <Input type="email" />
                </Field>
                <Field label="Password">
                    <Input type="password" />
                </Field>
                <Button type="submit">
                    Sign In
                </Button>
            </form>
        </Page>
    );
};

export default SignInPage