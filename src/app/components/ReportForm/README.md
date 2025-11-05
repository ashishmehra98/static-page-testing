# ReportForm Components

This directory contains form components designed specifically for the ReportForm with consistent styling and behavior.

## Components

### Input

A versatile input component with multiple variants for different input types.

#### Variants

- **`text`** - Standard text input (default)
- **`time`** - Time input with clock icon and 12-hour format display
- **`date`** - Date input with calendar icon and formatted date display

#### Props

| Prop          | Type                                                   | Default      | Description                                                         |
| ------------- | ------------------------------------------------------ | ------------ | ------------------------------------------------------------------- |
| `label`       | `string`                                               | **required** | Label text displayed above the input                                |
| `variant`     | `"time" \| "text" \| "date"`                           | `"text"`     | Input variant type                                                  |
| `value`       | `string`                                               | `undefined`  | Current input value                                                 |
| `onChange`    | `(event: React.ChangeEvent<HTMLInputElement>) => void` | `undefined`  | Change handler                                                      |
| `placeholder` | `string`                                               | `undefined`  | Placeholder text (for text variant) or display text (for time/date) |
| `name`        | `string`                                               | `undefined`  | Input name attribute                                                |
| `type`        | `string`                                               | `undefined`  | Override input type (auto-determined by variant if not provided)    |
| `disabled`    | `boolean`                                              | `false`      | Disable the input                                                   |
| `required`    | `boolean`                                              | `false`      | Mark field as required                                              |
| `error`       | `string`                                               | `undefined`  | Error message to display                                            |
| `className`   | `string`                                               | `""`         | Additional CSS classes                                              |

#### Usage Examples

##### Text Input

```tsx
import { Input } from "@/app/components/ReportForm";

const [name, setName] = useState("");

<Input
	variant="text"
	label="Full Name"
	placeholder="Enter your name"
	value={name}
	onChange={(e) => setName(e.target.value)}
	required
/>;
```

##### Time Input

```tsx
import { Input } from "@/app/components/ReportForm";

const [startTime, setStartTime] = useState("");

<Input
	variant="time"
	label="START time"
	placeholder="9:30 AM"
	value={startTime}
	onChange={(e) => setStartTime(e.target.value)}
	required
/>;
```

##### Date Input

```tsx
import { Input } from "@/app/components/ReportForm";

const [appointmentDate, setAppointmentDate] = useState("");

<Input
	variant="date"
	label="Appointment Date"
	placeholder="MM/DD/YYYY"
	value={appointmentDate}
	onChange={(e) => setAppointmentDate(e.target.value)}
	required
/>;
```

##### With Error Handling

```tsx
import { Input } from "@/app/components/ReportForm";

const [email, setEmail] = useState("");
const [error, setError] = useState("");

<Input
	variant="text"
	type="email"
	label="Email Address"
	placeholder="example@email.com"
	value={email}
	onChange={(e) => {
		setEmail(e.target.value);
		setError(""); // Clear error on change
	}}
	error={error}
	required
/>;
```

##### With Ref

```tsx
import { useRef } from "react";
import { Input } from "@/app/components/ReportForm";

const inputRef = useRef<HTMLInputElement>(null);

<Input
  ref={inputRef}
  variant="text"
  label="Focusable Input"
  placeholder="Click button to focus"
/>

<button onClick={() => inputRef.current?.focus()}>
  Focus Input
</button>
```

---

### Select

A dropdown select component with styling matching the Input component.

#### Props

| Prop          | Type                                                    | Default      | Description                                       |
| ------------- | ------------------------------------------------------- | ------------ | ------------------------------------------------- |
| `label`       | `string`                                                | **required** | Label text displayed above the select             |
| `options`     | `SelectOption[]`                                        | **required** | Array of option objects with `value` and `label`  |
| `value`       | `string`                                                | `undefined`  | Currently selected value                          |
| `onChange`    | `(event: React.ChangeEvent<HTMLSelectElement>) => void` | `undefined`  | Change handler                                    |
| `placeholder` | `string`                                                | `undefined`  | Placeholder text shown when no option is selected |
| `name`        | `string`                                                | `undefined`  | Select name attribute                             |
| `disabled`    | `boolean`                                               | `false`      | Disable the select                                |
| `required`    | `boolean`                                               | `false`      | Mark field as required                            |
| `error`       | `string`                                                | `undefined`  | Error message to display                          |
| `className`   | `string`                                                | `""`         | Additional CSS classes                            |

#### SelectOption Type

```tsx
interface SelectOption {
	value: string;
	label: string;
}
```

#### Usage Examples

##### Basic Select

```tsx
import { Select } from "@/app/components/ReportForm";

const [selectedOption, setSelectedOption] = useState("");

const options = [
	{ value: "option1", label: "Option 1" },
	{ value: "option2", label: "Option 2" },
	{ value: "option3", label: "Option 3" },
];

<Select
	label="Choose an Option"
	placeholder="Select an option"
	options={options}
	value={selectedOption}
	onChange={(e) => setSelectedOption(e.target.value)}
	required
/>;
```

##### Service Type Selection

```tsx
import { Select } from "@/app/components/ReportForm";

const [serviceType, setServiceType] = useState("");

const serviceOptions = [
	{ value: "residential", label: "Residential" },
	{ value: "commercial", label: "Commercial" },
	{ value: "industrial", label: "Industrial" },
	{ value: "strata", label: "Strata" },
];

<Select
	label="Service Type"
	placeholder="Select service type"
	options={serviceOptions}
	value={serviceType}
	onChange={(e) => setServiceType(e.target.value)}
	required
/>;
```

##### Pest Type Selection

```tsx
import { Select } from "@/app/components/ReportForm";

const [pestType, setPestType] = useState("");

const pestOptions = [
	{ value: "ants", label: "Ants" },
	{ value: "bed-bugs", label: "Bed Bugs" },
	{ value: "cockroaches", label: "Cockroaches" },
	{ value: "rodents", label: "Rodents" },
	{ value: "spiders", label: "Spiders" },
];

<Select
	label="Pest Type"
	placeholder="Select pest type"
	options={pestOptions}
	value={pestType}
	onChange={(e) => setPestType(e.target.value)}
	required
/>;
```

##### With Error Handling

```tsx
import { Select } from "@/app/components/ReportForm";

const [priority, setPriority] = useState("");
const [error, setError] = useState("");

const priorityOptions = [
	{ value: "low", label: "Low" },
	{ value: "medium", label: "Medium" },
	{ value: "high", label: "High" },
	{ value: "urgent", label: "Urgent" },
];

<Select
	label="Priority Level"
	placeholder="Select priority"
	options={priorityOptions}
	value={priority}
	onChange={(e) => {
		setPriority(e.target.value);
		setError(""); // Clear error on change
	}}
	error={error}
	required
/>;
```

##### With Ref

```tsx
import { useRef } from "react";
import { Select } from "@/app/components/ReportForm";

const selectRef = useRef<HTMLSelectElement>(null);

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" }
];

<Select
  ref={selectRef}
  label="Focusable Select"
  placeholder="Select an option"
  options={options}
/>

<button onClick={() => selectRef.current?.focus()}>
  Focus Select
</button>
```

---

## Complete Form Example

Here's a complete example using both components together in a form:

```tsx
"use client";

import { useState } from "react";
import { Input, Select } from "@/app/components/ReportForm";

export default function ReportFormExample() {
	const [formData, setFormData] = useState({
		customerName: "",
		email: "",
		phone: "",
		serviceType: "",
		pestType: "",
		appointmentDate: "",
		startTime: "",
		endTime: "",
		priority: "",
		description: "",
	});

	const [errors, setErrors] = useState<Record<string, string>>({});

	const serviceOptions = [
		{ value: "residential", label: "Residential" },
		{ value: "commercial", label: "Commercial" },
		{ value: "industrial", label: "Industrial" },
	];

	const pestOptions = [
		{ value: "ants", label: "Ants" },
		{ value: "bed-bugs", label: "Bed Bugs" },
		{ value: "cockroaches", label: "Cockroaches" },
		{ value: "rodents", label: "Rodents" },
		{ value: "spiders", label: "Spiders" },
	];

	const priorityOptions = [
		{ value: "low", label: "Low" },
		{ value: "medium", label: "Medium" },
		{ value: "high", label: "High" },
		{ value: "urgent", label: "Urgent" },
	];

	const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData((prev) => ({
			...prev,
			[field]: e.target.value,
		}));

		// Clear error for this field
		if (errors[field]) {
			setErrors((prev) => ({
				...prev,
				[field]: "",
			}));
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Simple validation example
		const newErrors: Record<string, string> = {};

		if (!formData.customerName) newErrors.customerName = "Name is required";
		if (!formData.email) newErrors.email = "Email is required";
		if (!formData.serviceType) newErrors.serviceType = "Service type is required";
		if (!formData.appointmentDate) newErrors.appointmentDate = "Date is required";

		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			// Submit form
			console.log("Form submitted:", formData);
		}
	};

	return (
		<form onSubmit={handleSubmit} style={{ maxWidth: "600px", padding: "20px" }}>
			<Input
				variant="text"
				label="Customer Name"
				placeholder="Enter customer name"
				value={formData.customerName}
				onChange={handleChange("customerName")}
				error={errors.customerName}
				required
			/>

			<Input
				variant="text"
				type="email"
				label="Email Address"
				placeholder="example@email.com"
				value={formData.email}
				onChange={handleChange("email")}
				error={errors.email}
				required
			/>

			<Input
				variant="text"
				type="tel"
				label="Phone Number"
				placeholder="+61 4XX XXX XXX"
				value={formData.phone}
				onChange={handleChange("phone")}
			/>

			<Select
				label="Service Type"
				placeholder="Select service type"
				options={serviceOptions}
				value={formData.serviceType}
				onChange={handleChange("serviceType")}
				error={errors.serviceType}
				required
			/>

			<Select
				label="Pest Type"
				placeholder="Select pest type"
				options={pestOptions}
				value={formData.pestType}
				onChange={handleChange("pestType")}
			/>

			<Input
				variant="date"
				label="Appointment Date"
				placeholder="MM/DD/YYYY"
				value={formData.appointmentDate}
				onChange={handleChange("appointmentDate")}
				error={errors.appointmentDate}
				required
			/>

			<Input
				variant="time"
				label="START time"
				placeholder="9:30 AM"
				value={formData.startTime}
				onChange={handleChange("startTime")}
			/>

			<Input variant="time" label="END time" placeholder="5:30 PM" value={formData.endTime} onChange={handleChange("endTime")} />

			<Select
				label="Priority Level"
				placeholder="Select priority"
				options={priorityOptions}
				value={formData.priority}
				onChange={handleChange("priority")}
			/>

			<Input
				variant="text"
				label="Description"
				placeholder="Additional notes..."
				value={formData.description}
				onChange={handleChange("description")}
			/>

			<button type="submit" style={{ marginTop: "20px", padding: "12px 24px" }}>
				Submit Report
			</button>
		</form>
	);
}
```

## Styling Notes

- All components use consistent styling with:
  - Background color: `#f7f7f7`
  - Border: `rgba(19, 64, 33, 0.28)`
  - Border radius: `94px`
  - Height: `41px`
  - Text color: `rgba(19, 64, 33, 0.8)`
  - Font: `var(--font-heading)`, 16px, weight 500

- Components are responsive and adapt on mobile devices (max-width: 480px)

- Focus states show a subtle border highlight with shadow

- Error states display red borders and error messages below the field
