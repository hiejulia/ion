export class EventModel {
  _id: string;
  title: string;
  slug: string;
  location:string;
  description: string;
  office:string;
  address:string;
  typeOfEvent: string;
  numberOfParticipantsEstimated:number;
  isActive:boolean;
  startDate:string;
  endDate:string;
  organisation: string;
  industry: string;
  country: string;
  createdAt: string;
  userCreated:string;
  participants:any;

  constructor(
    _id?: string,
    title?: string,
    slug?: string,
    location?:string,
    description?: string,
    office?:string,
  address?:string,
  typeOfEvent?: string,
  numberOfParticipantsEstimated?:number,
  isActive?:boolean,
  startDate?:string,
  endDate?:string,
  organisation?: string,
  industry?: string,
  country?: string,
  createdAt?: string,
  participants?:any
  ) {
    this._id = _id;
    this.title = title;
    this.slug = slug;
    this.location = location;
    this.office = office;
    this.address= address;
    this.description = description;
    this.typeOfEvent = typeOfEvent;
    this.numberOfParticipantsEstimated = numberOfParticipantsEstimated;
    this.isActive = isActive;
    this.startDate= startDate;
    this.endDate = endDate;
    this.organisation = organisation;
    this.industry = industry;
    this.country = country;
    this.createdAt = createdAt;
    this.participants = participants;
  }
}
