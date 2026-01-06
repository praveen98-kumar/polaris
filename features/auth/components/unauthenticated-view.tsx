import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { ShieldWarningIcon } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@/components/ui/item";

export const UnauthenticatedView = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-background">
			<div className="w-full max-w-lg bg-muted">
				<Item variant="outline">
					<ItemMedia variant="icon">
						<ShieldWarningIcon />
					</ItemMedia>
					<ItemContent>
						<ItemTitle>Unauthenticated Access</ItemTitle>
						<ItemDescription>
							You are not authorized to access this resource.
						</ItemDescription>
					</ItemContent>
					<ItemActions>
						<Button render={<SignInButton />}>Sign In</Button>
						<Button variant="outline" render={<SignUpButton />}>
							Sign Up
						</Button>
					</ItemActions>
				</Item>
			</div>
		</div>
	);
};
