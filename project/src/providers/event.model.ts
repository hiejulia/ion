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
  timeStart:string;
  timeEnd:string;
  organisation: string;
  industry: string;
  country: string;
  createdAt: string;
  userCreated:string;

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
  timeStart?:string,
  timeEnd?:string,
  organisation?: string,
  industry?: string,
  country?: string,
  createdAt?: string
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
    this.timeStart= timeStart;
    this.timeEnd = timeEnd;
    this.organisation = organisation;
    this.industry = industry;
    this.country = country;
    this.createdAt = createdAt;
  }
}
